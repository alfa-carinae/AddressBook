class Employee {
	image = icons.user;
	constructor(name, designation, department) {
		this.name = name;
		this.designation = designation;
		this.department = department;
	}
	toResult() {
		let result = document.createElement("div");
		result.classList.add("inline-flex", "bg-gray-200", "p-1", "pr-4", "gap-2", "m-2", "result");
		let imageContainer = document.createElement("div");
		imageContainer.classList.add("flex", "items-center", "border", "border-gray-500", "image-container");
		imageContainer.insertAdjacentHTML("afterbegin", icons.user);
		imageContainer.querySelector("svg").classList.add("h-16", "w-16");
		let attributeContainer = document.createElement("div");
		attributeContainer.classList.add("flex", "flex-col", "text-sm", "attribute-container");
		let name = document.createElement("span"),
			designation = document.createElement("span"),
			department = document.createElement("span");
		name.classList.add("font-bold", "text-gray-800");
		name.textContent = this.name;
		designation.classList.add("text-[10px]", "text-gray-600");
		designation.textContent = this.designation;
		department.classList.add("text-[10px]", "text-gray-600");
		department.textContent = this.department;
		let iconContainer = document.createElement("div");
		iconContainer.classList.add("flex", "text-gray-600", "gap-1", "icon-container");
		for (const icon of [icons["mail"], icons["message"], icons["phone"], icons["star"], icons["heart"]]) {
			let a = document.createElement("a");
			a.href = "#";
			a.insertAdjacentHTML("afterbegin", icon);
			a.querySelector("svg").classList.add("h-4", "w-4");
			iconContainer.append(a);
		}
		attributeContainer.append(name, designation, department, iconContainer);
		result.append(imageContainer, attributeContainer);

		return result;
	}
}
let icons = {
	user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
	<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
	</svg>`,
	mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
		<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
		</svg>`,
	message: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		<path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
		</svg>`,
	phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
		</svg>`,
	star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
		</svg>`,
	heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
		</svg>`
}
let employees = [
	new Employee("John Doe", "SharePoint Practice Head", "IT Department"),
	new Employee("Jane Doe", "Software Engineer", "IT Department"),
	new Employee("Norah Jackson", "Accountant", "Accounting Department"),
	new Employee("Boris Dempsey", "Biologist", "Research and Development"),
	new Employee("Logan Todd", "SharePoint Practice Head", "IT Department"),
	new Employee("Martin Lowe", "HR Specialist", "Human Resources Department"),
	new Employee("Gil Clifford", "Service Supervisor", "Operations Department"),
	new Employee("Mason Knight", "Executive Director", "Management"),
	new Employee("Elly Lynch", "Webmaster", "IT Department")
];
// Generate alphabet list.
(function () {
	let container = document.getElementById("alphabet-array");
	let uicon = document.createElement("button");
	uicon.insertAdjacentHTML("afterbegin", icons["user"]);
	uicon.querySelector("svg").classList.add("h-5", "w-5");
	uicon.addEventListener("click", function() {
		results.replaceChildren();
		for (const employee of employees) {
			results.append(employee.toResult());
		}
	});
	container.append(uicon);
	for (const i of "abcdefghijklmnopqrstuvwxyz".toUpperCase()) {
		let btn = document.createElement("button");
		btn.textContent = i;
		btn.addEventListener("click", function(event) {
			results.replaceChildren();
			for (const employee of employees) {
				if (employee.name.startsWith(event.target.textContent)) results.append(employee.toResult());
			}
		});
		container.append(btn);
	}
})();
// Initialize results container.
let results = document.getElementById("results-container");
for (const employee of employees) {
	results.append(employee.toResult());
}