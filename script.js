function showForm() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('trust').style.display = 'none';
    document.getElementById('formSection').classList.add('active');
    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
}

function hideForm() {
    document.getElementById('formSection').classList.remove('active');
    document.getElementById('hero').style.display = 'block';
    document.getElementById('trust').style.display = 'block';
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
}

function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Create email body
    const emailBody = `
New Life After Documentary Submission

Name: ${data.name}
Email: ${data.email}

Trauma/Challenge Experienced:
${data.trauma}

What Helped Recovery:
${data.recovery}

Open to Camera: ${data.camera}

Additional Information:
${data.additional || 'None provided'}

Submitted: ${new Date().toLocaleString()}
    `;

    // Create mailto link
    const subject = encodeURIComponent('New Life After Documentary Submission');
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:info@lifeafterseries.org?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    document.getElementById('storyForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Reset form after a delay
    setTimeout(() => {
        event.target.reset();
        document.getElementById('storyForm').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        hideForm();
    }, 8000);
}

// Enhanced page load animation
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 150);
});
