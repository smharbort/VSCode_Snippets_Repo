const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	"active registration": true
};

for (const [key, value] of Object.entries(vehicle)) {
    console.log(key, value)
};