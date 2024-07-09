document.getElementById('birthday-form').addEventListener('submit', function(event) {
    //prevent default action when button is clicked
    event.preventDefault();

    //constant variables needed
    const birthday = new Date(document.getElementById('birthday').value);
    const year = birthday.getFullYear();
    const month = birthday.getMonth() + 1;
    const day = birthday.getDate();
    const gender = document.getElementById('gender').value;

    const cc = Math.floor(year / 100);
    const yy = year % 100;
    const d = (Math.floor((cc / 4) - 2 * cc - 1) + (Math.floor((5 * yy / 4)) + (Math.floor((26 * (month + 1) / 10)) + day))) % 7;

    //get the day of birth
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNameIndex = d === 0 ? 6 : d - 1;
    const dayName = dayNames[dayNameIndex];

    //inityializing the defined akan names for each day and each gender
    const maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    //generate akan name based on gender
    let akanName;
    switch (gender.toLowerCase()) {
        case 'male':
            akanName = maleAkanNames[dayNameIndex];
            break;
        case 'female':
            akanName = femaleAkanNames[dayNameIndex];
            break;
        default:
            alert('Please select a valid gender.');
            return;
    }
    document.getElementById('result').innerHTML = `Your Akan name is ${akanName}`;
});
