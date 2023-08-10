const user_con =  document.querySelector('.user-container');
        const regis_btn =  document.querySelector('.registration-btn');
        const login_btn =  document.querySelector('.login-btn');

        const handleClickLog = ()=>{
            if (user_con.classList.contains('login-section--display')) {
            user_con.classList.remove('login-section--display');
        } else {
            user_con.classList.add('login-section--display');
        }
        }

        const handleClickReg = ()=>{
            if (user_con.classList.contains('login-section--display')) {
                
                user_con.classList.remove('login-section--display');
            } else {
                user_con.classList.add('login-section--display');
        }
        }