// Button နှင့် Body ကို DOM မှတဆင့် ဆွဲယူခြင်း
const themeBtn = document.getElementById('theme-toggle-btn');
const bodyElement = document.body;

// Button ကို Click နှိပ်လိုက်တိုင်း အလုပ်လုပ်မည့် Function
themeBtn.addEventListener('click', function() {
    
    // Light Mode ဖြစ်နေရင် Dark Mode သို့ပြောင်းမည်
    if (bodyElement.classList.contains('light-mode')) {
        bodyElement.classList.remove('light-mode');
        bodyElement.classList.add('dark-mode');
        themeBtn.textContent = 'Switch to Light Mode'; // Button စာသားပါ ပြောင်းသွားမည်
    } 
    // Dark Mode ဖြစ်နေရင် Light Mode သို့ပြန်ပြောင်းမည်
    else {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
        themeBtn.textContent = 'Switch to Dark Mode';
    }
});