// تطبيق FitCoach Pro
const App = {
    currentUser: null,
    currentDay: 1,
    trackingData: {},
    
    init() {
        this.render();
        this.loadData();
        this.registerServiceWorker();
    },
    
    render() {
        const app = document.getElementById('app');
        
        // شاشة تسجيل الدخول
        app.innerHTML = `
            <div id="login-screen" class="card">
                <h2 style="text-align: center;">مرحباً بك في FitCoach Pro</h2>
                
                <div style="margin: 20px 0;">
                    <h3>تسجيل دخول العملاء:</h3>
                    <button class="btn" onclick="App.loginClient('سارة', 1)">
                        سارة - اليوم الأول
                    </button>
                    <button class="btn" onclick="App.loginClient('محمد', 15)">
                        محمد - اليوم 15
                    </button>
                    <button class="btn" onclick="App.loginClient('أحمد', 84)">
                        أحمد - البرنامج مكتمل
                    </button>
                </div>
                
                <div style="margin: 20px 0;">
                    <h3>تسجيل دخول المدرب:</h3>
                    <button class="btn" onclick="App.loginCoach()">
                        لوحة تحكم المدرب
                    </button>
                </div>
            </div>
            
            <div id="client-screen" class="card hidden"></div>
            <div id="coach-screen" class="card hidden"></div>
        `;
    },
    
    loginClient(name, day) {
        this.currentUser = { name, type: 'client', day };
        this.currentDay = day;
        
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('client-screen').classList.remove('hidden');
        
        this.renderClientDashboard();
    },
    
    loginCoach() {
        this.currentUser = { name: 'المدرب', type: 'coach' };
        
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('coach-screen').classList.remove('hidden');
        
        this.renderCoachDashboard();
    },
    
    renderClientDashboard() {
        const dashboard = document.getElementById('client-screen');
        const progress = (this.currentDay / 84) * 100;
        
        dashboard.innerHTML = `
            <h2>مرحباً ${this.currentUser.name}!</h2>
            <button class="btn" onclick="App.logout()">خروج</button>
            
            <div style="margin: 20px 0;">
                <h3>التقدم: اليوم ${this.currentDay} من 84</h3>
                <div style="background: #e0e0e0; height: 20px; border-radius: 10px;">
                    <div style="background: #4caf50; width: ${progress}%; height: 100%; border-radius: 10px;"></div>
                </div>
            </div>
            
            <div style="margin: 20px 0;">
                <h3>التتبع اليومي</h3>
                <input type="number" id="weight" placeholder="الوزن (كجم)" style="padding: 10px; margin: 5px;">
                <input type="number" id="steps" placeholder="عدد الخطوات" style="padding: 10px; margin: 5px;">
                <button class="btn" onclick="App.saveDaily()">حفظ</button>
            </div>
        `;
    },
    
    renderCoachDashboard() {
        const dashboard = document.getElementById('coach-screen');
        
        dashboard.innerHTML = `
            <h2>لوحة تحكم المدرب</h2>
            <button class="btn" onclick="App.logout()">خروج</button>
            
            <div style="margin: 20px 0;">
                <h3>عملاؤك:</h3>
                <div style="padding: 10px; background: #f5f5f5; margin: 10px 0;">
                    سارة - اليوم 1 - نشط
                </div>
                <div style="padding: 10px; background: #f5f5f5; margin: 10px 0;">
                    محمد - اليوم 15 - يحتاج متابعة
                </div>
                <div style="padding: 10px; background: #f5f5f5; margin: 10px 0;">
                    أحمد - اليوم 84 - مكتمل
                </div>
            </div>
        `;
    },
    
    saveDaily() {
        const weight = document.getElementById('weight').value;
        const steps = document.getElementById('steps').value;
        
        if (weight && steps) {
            alert('تم حفظ البيانات بنجاح!');
            document.getElementById('weight').value = '';
            document.getElementById('steps').value = '';
        } else {
            alert('الرجاء إدخال جميع البيانات');
        }
    },
    
    logout() {
        this.currentUser = null;
        location.reload();
    },
    
    loadData() {
        const saved = localStorage.getItem('fitcoach-data');
        if (saved) {
            this.trackingData = JSON.parse(saved);
        }
    },
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
                .then(() => console.log('Service Worker مسجل'))
                .catch(() => console.log('فشل تسجيل Service Worker'));
        }
    }
};

// بدء التطبيق
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
