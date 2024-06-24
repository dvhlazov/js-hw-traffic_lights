document.addEventListener('DOMContentLoaded', () => {
    const redLightAuto = document.querySelector('.redA');
    const yellowLightAuto = document.querySelector('.yellowA');
    const greenLightAuto = document.querySelector('.greenA');
    const redLightPedestrian = document.querySelector('.redP');
    const greenLightPedestrian = document.querySelector('.greenP');
    const btn = document.getElementById('btn');
    let stripesPedestrian = document.querySelectorAll('.pedastrian_stripe');
    let stripesRoad = document.querySelectorAll('.road_stripes');
    
    let countdownInfo = document.getElementById('countdown');
    
    let pressedCheck = false;   //default Check Pressed Buttons
    let lastPressedBtn = 0;     //default Pressed BTN time;

    
    
    
    
    
    btn.addEventListener('click', () => {
        const currentTime = new Date().getTime();
       
        
        if (pressedCheck || (currentTime - lastPressedBtn < 30000)) {
            countdownInfo.textContent="Чекай 30 секунд на повторне натискання кнопки";
            return;   // !!!Block for a pressingButton for 30 seconds
            
        } else {
            pressedCheck = true;
            countdownInfo.textContent="OK";
        }
       
        
        pressedCheck = true; 
        lastPressedBtn = currentTime;
        
            // waiting time to start changing lights;  START of CYCLE!!!
        setTimeout(() => {     
            greenLightAuto.classList.remove('active');
            greenLightAuto.classList.add('no_active');
            

            setTimeout(() => {
                yellowLightAuto.classList.remove('no_active');
                yellowLightAuto.classList.add('active');

                setTimeout(() => {
                    yellowLightAuto.classList.add('no_active');
                    yellowLightAuto.classList.remove('active');

                    setTimeout(() => {
                        redLightAuto.classList.remove('no_active');
                        redLightAuto.classList.add('active');
                        redLightPedestrian.classList.remove('active');
                        redLightPedestrian.classList.add('no_active');
                        greenLightPedestrian.classList.remove('no_active');
                        greenLightPedestrian.classList.add('active');
                        stripesPedestrian.forEach(stripe => stripe.classList.remove('red'));
                        stripesPedestrian.forEach(stripe => stripe.classList.add('white'));  
                        stripesRoad.forEach(stripe => stripe.classList.remove('white'));
                        stripesRoad.forEach(stripe => stripe.classList.add('red'));  

                       

                        setTimeout(() => {
                            redLightAuto.classList.add('no_active');
                            redLightAuto.classList.remove('active');

                            setTimeout(() => {
                                yellowLightAuto.classList.remove('no_active');
                                yellowLightAuto.classList.add('active');

                                setTimeout(() => {
                                    yellowLightAuto.classList.add('no_active');
                                    yellowLightAuto.classList.remove('active');

                                    setTimeout(() => {      //change;  END of CYCLE!!!
                                        greenLightAuto.classList.remove('no_active');
                                        greenLightAuto.classList.add('active');
                                        greenLightPedestrian.classList.remove('active');
                                        greenLightPedestrian.classList.add('no_active');
                                        redLightPedestrian.classList.remove('no_active');
                                        redLightPedestrian.classList.add('active');
                                        stripesPedestrian.forEach(stripe => stripe.classList.add('red'));
                                        stripesPedestrian.forEach(stripe => stripe.classList.remove('white'));  
                                        stripesRoad.forEach(stripe => stripe.classList.add('white'));
                                        stripesRoad.forEach(stripe => stripe.classList.remove('red')); 

                                        

                                        pressedCheck = false; 

                                    }, 1000);  //change;  END of CYCLE!!!

                                }, 1000); 

                            }, 1000); 

                        }, 6000); //duration time of pedestrian "green"

                    }, 1000); 

                }, 1000); 

            }, 1000); 

        }, 4000);   // waiting time to start changing lights;  START CYCLE of CHANGES!!!
    });
});