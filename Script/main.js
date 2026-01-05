function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon img");
    menu.classList.toggle("open");
    
    if(menu.classList.contains("open")){
        icon.src = "assets/close.png";
    } else {
        icon.src = "assets/menu.png";
    }
}   

// Toast Notification Function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

function sendMail(){
    let params ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    
    emailjs.send("service_0hik5oy","template_yx9fp7c",params)
        .then(function(response) {
            showToast('Message sent successfully! 🎉', 'success');
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("message").value = '';
        })
        .catch(function(error) {
            showToast('Failed to send message. Please try again.', 'error');
            console.error('Error:', error);
        });
}