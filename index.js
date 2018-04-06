
const odd_types = require("./odd_types");

function scoreOddValidator(options) {
	let validOdd = false;
	let goalsHomeTeam, goalsAwayTeam, oddType, oddToCheck;
		if (!options) 
			throw new Error("no options provided");

		if (options.goalsHomeTeam && options.goalsAwayTeam && options.oddType && options.oddToCheck) 
			({goalsHomeTeam, goalsAwayTeam, oddType, oddToCheck} = options);
		else 
			throw new Error("Invalid options");
		

		switch(oddType){
			case 'simpleodd':
				let simpleOdd = oddToCheck;
				
				if (simpleOdd == "1") {
					validOdd = goalsHomeTeam > goalsAwayTeam;
				} else if(simpleOdd == "X") {
					validOdd = goalsHomeTeam == goalsAwayTeam;
				} else if (simpleOdd == "2") {
					validOdd = goalsHomeTeam < goalsAwayTeam;
				}
				break;
			case 'doublechance':
				let doublechance = oddToCheck;
				
				if (doublechance == "1X") {
					validOdd = goalsHomeTeam > goalsAwayTeam || goalsHomeTeam == goalsAwayTeam;
				} else if(doublechance == "12") {
					validOdd = goalsHomeTeam > goalsAwayTeam | goalsHomeTeam < goalsAwayTeam;
				} else if (doublechance == "2X") {
					validOdd = goalsHomeTeam < goalsAwayTeam || goalsHomeTeam == goalsAwayTeam;
				}
				break;
			case 'oddeven':
				let oddeven = oddToCheck;
				
				if (oddeven == "Y") {
					validOdd = (goalsHomeTeam + goalsAwayTeam) % 2 == 0;
				} else if(oddeven == "N") {
					validOdd = (goalsHomeTeam + goalsAwayTeam) % 2 != 0;
				}
				break;
			case 'bothteamstoscore':
				let bothteamstoscore = oddToCheck;
				
				if (bothteamstoscore == "Y") {
					validOdd = (goalsHomeTeam > 0 && goalsAwayTeam > 0);
				} else if(bothteamstoscore == "N") {
					validOdd = (goalsHomeTeam == 0 || goalsAwayTeam == 0);
				}
				break;
		}


	return validOdd;

}

module.exports = {
	scoreOddValidator,
	oddType: odd_types
};

