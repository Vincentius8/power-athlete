// Simple form data handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.auth-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get all form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value,
            password_confirmation: document.getElementById('password_confirmation').value
        };
        
        // Basic validation
        if (!validateForm(formData)) {
            return;
        }
        
        // Log data (or send to server)
        console.log('Form data:', formData);
        
        // Submit to server
        // await submitToServer(formData);
    });
    
    function validateForm(data) {
        if (!data.name) {
            alert('Please enter your name');
            return false;
        }
        
        if (!data.email || !data.email.includes('@')) {
            alert('Please enter a valid email');
            return false;
        }
        
        if (data.password.length < 8) {
            alert('Password must be at least 8 characters');
            return false;
        }
        
        if (data.password !== data.password_confirmation) {
            alert('Passwords do not match');
            return false;
        }
        
        return true;
    }
});