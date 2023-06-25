export const save = (data) => {
	localStorage.setItem("grades", JSON.stringify(data));
}

export const getGrades = () => {
	return JSON.parse(localStorage.getItem("grades") || "[]");
}

export const checkNisn = (nisn) => {
	return getGrades().some(grade => grade.nisn == nisn);
}