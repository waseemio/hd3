document.getElementById('cardForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const destinationUrl = document.getElementById('url').value;
    const imageFile = document.getElementById('image').files[0];
    
    // Convert image to Base64
    const reader = new FileReader();
    reader.onload = async () => {
        const imageData = reader.result;
        
        // Send data to API
        const response = await fetch('/api/create-card', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, destinationUrl, imageData })
        });
        
        const { cardUrl } = await response.json();
        document.getElementById('result').innerHTML = `
            <p>Card created! Share this link:</p>
            <a href="${cardUrl}" target="_blank">${cardUrl}</a>
        `;
    };
    reader.readAsDataURL(imageFile);
});
