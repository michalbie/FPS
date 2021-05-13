var output = [];

export const updateOutput = (type, x, y) => {
	const id = x.toString() + y.toString();
	const sameIdElement = output.filter((obj) => {
		return obj.id == id;
	});

	if (sameIdElement.length != 0) {
		if (type != "delete") {
			sameIdElement[0].id = id;
			sameIdElement[0].x = x;
			sameIdElement[0].y = y;
			sameIdElement[0].type = type;
		} else {
			output.splice(output.indexOf(sameIdElement[0]), 1);
		}
	} else {
		if (type != "delete") {
			output.push({
				id: id,
				x: x,
				y: y,
				type: type,
			});
		}
	}

	presentOutput();
};

const presentOutput = () => {
	const text = JSON.stringify(output, null, 5);
	document.getElementById("output-area").innerHTML = text;
};

export const getOutput = () => {
	return output;
};
