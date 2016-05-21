function round(v, d) {
	if (!d) {
		return Math.round(v);
	}
	if (d < 0) {
		var divider = Math.pow(10, Math.abs(d));
		return Math.round(v / divider) * divider;
	}
	var multiplier = Math.pow(10, d);
	return Math.round(v * multiplier) / multiplier;
}

module.exports = {
	round: round
};