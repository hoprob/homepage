// //Calls functions to fill up CV
// getEducations();
// getWorkExperience();
import education from './data/education.json';

//Function to fill educations in html
export async function GetEducations(url){
    console.log('in GetEducation')
    fetch(url)
    .then(response => 
        {
            console.log(response.body)
            return response.json() })
    .then(json => {
        let output = '';
        console.log('in output');
        
        json.forEach(edu => {
            output += ` 
            <h5>${edu.title}</h5>
            <p><strong>När:</strong> ${edu.years}</p>
            <p><strong>Plats:</strong> ${edu.school}</p>
            <p><strong>Utbildningsform:</strong> ${edu.graduation}</p>
            <p><strong>Om utbildningen:</strong> ${edu.about}</p>
            <hr>
            `;
        });
        //document.getElementById('education-data').innerHTML = output;
        console.log('End of GetEducation')
        return output;
    });
};

//Function to fill work experience in html
export function GetWorkExperience(){
    fetch("./data/workExperience.json")
    .then(response => response.json())
    .then(json => {
        let output = '';
        json.forEach(work => {
            output += `
            <h5>${work.title}</h5>
            <p><strong>När:</strong> ${work.years}</p>
            <p><strong>Plats:</strong> ${work.city}</p>
            <p><strong>Roll:</strong> ${work.role}</p>
            <p><strong>Om anställningen:</strong> ${work.about}</p>
            <hr>
            `;
        });
        document.getElementById('workExperience-data').innerHTML = output;
    });
}



