"use strict";

function charecteristics (dmg, armor, cost) {
	return {
		'dmg': dmg, 'armor': armor, 'cost': cost
	}
}


function NotDataError(message) {
	this.name = "NotDataError";
	this.message = (message || "");
}
NotDataError.prototype = Error.prototype;


String.prototype.supplant = function (o) {
	return this.replace(/{([^{}]*)}/g,
			function (a, b) {
				var r = o[b];
				return typeof r === 'string' || typeof r === 'number' ? r : a;
			}
	);
};


String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};


function Unit(name, fire_rate, supplies_needed, levels) {

	var NotDataError_MSG = "No data for {unit_name}, level {level}!";

	this.getName = function() {
		return name;
	};

	this.getFireRate = function() {
		return fire_rate;
	};

	this.getSuppliesNeeded = function() {
		return supplies_needed;
	};

	this.getLevels = function() {
		return levels;
	};

	this.getDamagePerSec = function(level) {
		try {
			return levels[level].dmg / fire_rate;
		} catch(e) {
			throw new NotDataError(NotDataError_MSG.supplant({'unit_name': name, 'level': level}));

		}
	};

	this.getArmor = function(level) {
		try {
			return levels[level].armor;
		} catch(e) {
			throw new NotDataError(NotDataError_MSG.supplant({'unit_name': name, 'level': level}));
		}
	};

}


function Troop(Unit, level, count) {

	this.getLevel = function () {
		return level;
	};

	this.getCount = function() {
		return count;
	};

	this.getArmor = function() {
		return Unit.getArmor(level);
	};

	this.getDmgPerSec = function() {
		return Unit.getDamagePerSec(level)
	};

}


function Army (troops) {

	this.getDamage = function(){
		var total = 0;
		troops.forEach(function (troop) {
			total += troop.getDmgPerSec() * troop.getCount();
		});
		return total;
	};

	this.getArmor = function () {
		var total = 0;
		troops.forEach(function (troop) {
			total += troop.getArmor() * troop.getCount();
		});
		return total;
	};

	this.compare = function(army2) {

		try	{
			var
                result = "",  dmg_ratio, armor_ratio,
                dmg1 = this.getDamage(), dmg2 = army2.getDamage(),
                arm1 = this.getArmor(), arm2 = army2.getArmor();
		} catch (e) {
			if (e instanceof NotDataError) {
				return e.message;
			}else{
				throw e;
			}
		}

		dmg_ratio = (dmg1 <= dmg2) ? 1 - (dmg1 / dmg2)  : (dmg2 / dmg1) - 1;
		armor_ratio = (arm1 <= arm2) ? 1 - (arm1 / arm2) : (arm2 / arm1) - 1;

		result += "Damage " + ((dmg_ratio > 0) ?  "increase: " : "decrease: ") + (dmg_ratio * 100).toFixed(2) + '% <br>';
		result += "Armor " + ((armor_ratio > 0) ?  "increase: " : "decrease: ") + (armor_ratio * 100).toFixed(2) + '% <br>';

		return result;
	};

	this.getTroopsNum = function(){
		return troops.length;
	};

}