(function() {
    // 1. Create the button element
    const btn = document.createElement('button');
    btn.innerHTML = "💬 Say Hello";
    
    // 2. Style the button so it floats at the bottom right
    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '15px 25px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '9999',
        fontFamily: 'sans-serif'
    });

    // 3. Add a click event
    btn.onclick = function() {
        alert("Hello World! This script was loaded from a remote host.");
    };

    // 4. Inject it into the body of the website
    document.body.appendChild(btn);
})();