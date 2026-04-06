            function saklar (params) {

                let lampu1 = document.getElementById("lampu1");

                if (params == "on") {
                    lampu1.src = "Assets/images/on.png"
                } 
                if (params == "off") {
                    lampu1.src = "Assets/images/off.png"
                } 
                return lampu1;
            }