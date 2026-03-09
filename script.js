//Age Calculator Script
function calculateAge(){
     const input = document.getElementById('birthdate').value;
     
     if(!input){
       document.getElementById('ageOutput').innerHTML = "Please Enter a Value";
        return;
     }

     const birtDate = new Date(input + 'T12:00:00');
     const today  = new Date();

     let years = today.getFullYear() - birtDate.getFullYear();

     let months = today.getMonth() - birtDate.getMonth();
     
     let days = today.getDate() - birtDate.getDate();
     

     if(days < 0){
        months--;
        const LastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += LastMonth.getDate();
        };

        if(months < 0){
        years--;
        months += 12;
        };

        const options = {
            weekday: "long", //Thursday
            year: "numeric", //2026
            month: "long", //March vs May
            day: "numeric",//5
        };
        const formattedBirthdate = birtDate.toLocaleDateString("en-US", options);
        document.getElementById('ageOutput').innerHTML=`
        <strong> Your Birtdate: </strong> ${formattedBirthdate}
        <div class="break-down">
            <div class="age-box">
                <div class="age-number">${years}</div>
                <div>Years</div>
            </div>
             <div class="age-box">
                <div class="age-number">${months}</div>
                <div>Months</div>
            </div>
             <div class="age-box">
                <div class="age-number">${days}</div>
                <div>Days</div>
            </div>
        </div>
        `;
};