// Author: Rafael Carmona
// Description: For Allscript

const dropdown = document.querySelector('.dropdown');
const doctorSelected = document.querySelector("#select-doctor");
const doctor_name = document.querySelector(".card-content")
const similar_doctor = document.querySelector("#similar_list")

// Haven't learnd about working with data/databases so made my own here. I know this is not the right way to do it. But got the job done for the most part :)
var list1 = [
{id: 0, name: 'Dr. Mark Sanchez DO',  specialty: "Family medicine", location: "New York", reviewScore: 1.9},
{id: 1, name: 'Dr. Troy Aikmen MD', specialty: "Pediatrics", location: "Dallas", reviewScore: 5.0},
{id: 2, name: 'Dr. Tom Brady MD', specialty: "Internal medicine", location: "Tampa", reviewScore: 5.0},
{id: 3, name: 'Dr. Kurt Warner MD', specialty: "Family medicine", location: "Arizona", reviewScore: 4.3},
{id: 4, name: 'Dr. Lamar Jackson MD', specialty: "Neurology", location: "Baltimore", reviewScore: 3.9},
{id: 5, name: 'Dr. Joe Montana DO', specialty: "Obstetrics and gynecology", location: "San Francisco", reviewScore: 1.9},
{id: 6, name: 'Dr. Kyler Murray MD', specialty: "Family medicine", location: "Arizona", reviewScore: 2.9},
{id: 7, name: 'Dr. Cam Newton MD', specialty: "Neurology", location: "North Carolina", reviewScore: 4.4},
{id: 8, name: 'Dr. John Elway MD', specialty: "Urology", location: "Denver", reviewScore: 4.1},
{id: 9, name: 'Dr. Carson Palmer DO', specialty: "Family medicine", location: "Arizona", reviewScore: 4.7},
{id: 10, name: 'Dr. Joe Flacco DO', specialty: "Neurology", location: "Baltimore", reviewScore: 4.8},
{id: 11, name: 'Dr. Eli Manning MD', specialty: "Family medicine", location: "New York", reviewScore: 3.6},
{id: 12, name: 'Dr. Dak Prescott MD', specialty: "Pediatrics", location: "Dallas", reviewScore: 3.9},
{id: 13, name: 'Dr. Jimmy G MD', specialty: "Family medicine", location: "San Francisco", reviewScore: 2.9},
{id: 14, name: 'Dr. Peyton Manning MD', specialty: "Urology", location: "Denver", reviewScore: 4.6},
{id: 15, name: 'Dr. Matt Stafford DO', specialty: "Urology", location: "Los Angeles", reviewScore: 4.9},
{id: 16, name: 'Dr. Steve Young MD', specialty: "Family medicine", location: "San Francisco", reviewScore: 4.3},
{id: 17, name: 'Dr. Joe Burrow MD', specialty: "Urology", location: "Los Angeles", reviewScore: 4.6},
{id: 18, name: 'Dr. Justin Herbert MD', specialty: "Urology", location: "Los Angeles", reviewScore: 4.8},
{id: 19, name: 'Dr. Tim Fury MD', specialty: "Family medicine", location: "Arizona", reviewScore: 4.8},
{id: 20, name: 'Dr. Rookie Johnson MD', specialty: "Internal medicine", location: "Tampa", reviewScore: 4.8},
];


// Event listener for drop down menu of clients. 
let dr_id = 0;
doctorSelected.addEventListener('change', function(){
    // sets user selection
    dr_id = parseInt(this.value); 
    for(let i in list1){
        if(dr_id === list1[i].id){
            let dr_name = document.createElement('p');
            dr_name.classList.add("title");
            doctor_name.append(dr_name);
            dr_name.setAttribute('id', 'nameId');
            document.getElementById('nameId').innerText = list1[i].name
            // creates elements by specialty
            let doctor_specialty = document.createElement('p');
            doctor_specialty.classList.add("subtitle");
            doctor_name.append(doctor_specialty);
            doctor_specialty.setAttribute('id', 'specialtyId');
            document.getElementById('specialtyId').innerText = `Specialty: ${list1[i].specialty}`
            // creates elements by Location
            let doctor_location = document.createElement('p');
            doctor_location.classList.add("subtitle");
            doctor_name.append(doctor_location);
            doctor_location.setAttribute('id', 'locationId');
            document.getElementById('locationId').innerText = `Location: ${list1[i].location}`
            // creates elements by reviewScore
            let reviewScore = document.createElement('p');
            reviewScore.classList.add("subtitle");
            doctor_name.append(reviewScore);
            reviewScore.setAttribute('id', 'reviewScoreId');
            document.getElementById('reviewScoreId').innerText = `Review Score: ${list1[i].reviewScore}`
        }
    }
})

// another Event listner = adds similar doctors based on the same location and specialty. 
doctorSelected.addEventListener('change', function(){
   let location_similarity = list1[dr_id].location
    for(let x in list1){
        if(location_similarity === list1[x].location && list1[x].specialty === list1[dr_id].specialty && list1[dr_id].name !== list1[x].name){
            let s_doctor = document.createElement('li')
            similar_doctor.append(s_doctor);
            s_doctor.append(`${list1[x].name} - ${list1[x].specialty} - ${list1[x].location} - Score: ${list1[x].reviewScore}  `)
        }
    }   
})

// removes items from list 
doctorSelected.addEventListener('click', function(){
    const parent = document.getElementById("similar_list")
            while (parent.firstChild) {
                parent.firstChild.remove()
        }
})