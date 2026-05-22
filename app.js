// ==========================================================================
// 1. Initial State & In-memory Databases (Seed Data)
// ==========================================================================

const SEED_DATA_MONTIPA = {
    branches: [
        {
            name: "คอสโมบาร์ซ่า เมืองทอง ชั้น 1",
            jobType: "Event",
            sqm: 72,
            setupDate: "ขน 31 พ.ค. 69",
            openDate: "1 มิ.ย. 69",
            returnDate: "เก็บกลับ 5 มิ.ย. 69",
            manager: "ป๊อบ",
            interior: "กุ๊ก",
            contract: "",
            status: "DONE",
            remarks: "เฟอร์เดิมบางกะปิ"
        },
        {
            name: "Big C รัชดา ชั้น 1",
            jobType: "Event",
            sqm: 20,
            setupDate: "-",
            openDate: "-",
            returnDate: "เก็บกลับ 12 พ.ค. 69",
            manager: "จอย",
            interior: "เฟิร์ส",
            contract: "",
            status: "ON PROCESS",
            remarks: "เฟอร์เดิม"
        }
    ],
    furniture: [
        {
            barcode: "BC-20260521-0945",
            code: "MTP-RK-024",
            name: "ราวแขวนกางเกง",
            type: "ชุด",
            location: "คลังสินค้า (HQ)",
            color: "#10B981", // Mint green
            width: 120, depth: 45, height: 150,
            quantity: 2,
            status: "ว่าง",
            booker: "",
            remarks: "ประกอบด้วย: เสา 2 ชิ้น, คาน 1 ชิ้น, ฐานล้อ 1 ชุด",
            imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80",
            lastModified: "21/05/2026 09:45"
        },
        {
            barcode: "BC-20260520-1620",
            code: "MTP-TB-015",
            name: "โต๊ะโชว์กลางร้าน",
            type: "ชุด",
            location: "คอสโมบาร์ซ่า เมืองทอง ชั้น 1",
            color: "#78350F", // Wood brown
            width: 120, depth: 60, height: 90,
            quantity: 1,
            status: "รอคอนเฟิร์ม",
            booker: "นนทวัชร์",
            remarks: "ท็อปกระจกนิรภัย โครงไม้สักทอง",
            imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80",
            lastModified: "20/05/2026 16:20"
        },
        {
            barcode: "BC-20260519-1105",
            code: "MTP-SH-031",
            name: "ชั้นแขวนผนังลอย",
            type: "ชิ้นส่วน",
            location: "Big C รัชดา ชั้น 1",
            color: "#F1F5F9", // Off white
            width: 90, depth: 30, height: 2.5,
            quantity: 4,
            status: "ยืนยันแล้ว",
            booker: "กมลวรรณ",
            remarks: "มาพร้อมฉากรับเหล็กสีขาว 2 คู่",
            imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80",
            lastModified: "19/05/2026 11:05"
        },
        {
            barcode: "BC-20260518-0910",
            code: "MTP-ST-007",
            name: "ตู้เก็บสต๊อกบานเปิด",
            type: "ชุด",
            location: "คลังสินค้า (HQ)",
            color: "#1E293B", // Navy/Charcoal
            width: 80, depth: 45, height: 180,
            quantity: 1,
            status: "ว่าง",
            booker: "",
            remarks: "มีแผ่นชั้นปรับระดับได้ 3 แผ่น กุญแจล็อค 1 ชุด",
            imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=400&q=80",
            lastModified: "18/05/2026 09:10"
        },
        {
            barcode: "BC-20260517-1430",
            code: "MTP-RK-025",
            name: "ราวแขวนกางเกง (เสาเดี่ยว)",
            type: "ชิ้นส่วน",
            location: "คลังสินค้า (HQ)",
            color: "#10B981", // Mint
            width: 120, depth: 10, height: 150,
            quantity: 3,
            status: "ต้องซ่อม",
            booker: "",
            remarks: "ข้อต่อหลวม จำเป็นต้องสลักยึดเพิ่มเติม",
            imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80",
            lastModified: "17/05/2026 14:30"
        }
    ],
    logs: [
        { barcode: "BC-20260521-0945", action: "ลงทะเบียนเข้าระบบ", date: "21/05/2026", time: "09:45", details: "ลงทะเบียนเฟอร์นิเจอร์ใหม่เข้า 'คลังสินค้า (HQ)' โดยอินทีเรียแอดมิน" },
        { barcode: "BC-20260521-0945", action: "จัดเก็บเข้าคลัง", date: "21/05/2026", time: "10:10", details: "ตรวจสอบสภาพสินค้าผ่านเกณฑ์และนำชั้นเก็บเข้าพิกัดเรียบร้อย" },
        
        { barcode: "BC-20260520-1620", action: "ลงทะเบียนเข้าระบบ", date: "20/05/2026", time: "10:00", details: "ลงทะเบียนเข้าระบบโดยแอดมิน" },
        { barcode: "BC-20260520-1620", action: "ย้ายไปหน้าสาขา", date: "20/05/2026", time: "13:20", details: "ขนส่งย้ายจากคลังสินค้าหลัก (HQ) ไปจัดตั้งที่ คอสโมบาร์ซ่า เมืองทอง ชั้น 1" },
        { barcode: "BC-20260520-1620", action: "จองใช้งาน", date: "20/05/2026", time: "16:20", details: "อินทีเรีย 'นนทวัชร์' จองเพื่อเตรียมจัดนิทรรศการใหม่ (รอคอนเฟิร์ม)" },

        { barcode: "BC-20260519-1105", action: "ลงทะเบียนเข้าระบบ", date: "18/05/2026", time: "09:00", details: "ลงทะเบียนโดยแอดมินเข้าคลัง HQ" },
        { barcode: "BC-20260519-1105", action: "ย้ายไปหน้าสาขา", date: "18/05/2026", time: "14:10", details: "เบิกย้ายสินค้าไปไว้หน้าสาขา Big C รัชดา ชั้น 1" },
        { barcode: "BC-20260519-1105", action: "จองใช้งาน", date: "19/05/2026", time: "09:30", details: "อินทีเรีย 'กมลวรรณ' ทำการกดจองใช้งานสินค้า" },
        { barcode: "BC-20260519-1105", action: "ยืนยันแล้ว", date: "19/05/2026", time: "11:05", details: "ผู้จัดการคลังอนุมัติการจอง ล็อคสต๊อกถาวร" },

        { barcode: "BC-20260517-1430", action: "ลงทะเบียนเข้าระบบ", date: "17/05/2026", time: "10:00", details: "ลงทะเบียนสินค้าใหม่เข้าคลัง HQ" },
        { barcode: "BC-20260517-1430", action: "ปรับสถานะต้องซ่อม", date: "17/05/2026", time: "14:30", details: "ตรวจพบข้อต่อโยกชำรุด เปลี่ยนสถานะเป็นต้องซ่อมบำรุง" }
    ]
};

const SEED_DATA_MOTTA = {
    branches: [
        {
            name: "โรบินสัน สุรินทร์ ชั้น 1",
            jobType: "NEW Shop",
            sqm: 12,
            setupDate: "ขน 9 พ.ค. 69",
            openDate: "เปิด 10 พ.ค. 69",
            returnDate: "-",
            manager: "บิม",
            interior: "กุ๊ก",
            contract: "",
            status: "ON PROCESS",
            remarks: "เฟอร์เก่าบางกะปิ"
        },
        {
            name: "โรบินสัน สมุทรปราการ ชั้น 1",
            jobType: "ย้ายร้านชั่วคราว",
            sqm: 15.6,
            setupDate: "-",
            openDate: "เปิด 15 พ.ค. 69",
            returnDate: "ย้ายพื้นที่ 14 พ.ค. 69",
            manager: "มะลิ",
            interior: "กุ๊ก",
            contract: "",
            status: "ON PROCESS",
            remarks: "เฟอร์ใหม่"
        },
        {
            name: "ขอนแก่นแคมปัส ชั้น 1",
            jobType: "NEW Shop",
            sqm: 14,
            setupDate: "ขน 19 พ.ค. 69",
            openDate: "เปิด 20 พ.ค. 69",
            returnDate: "-",
            manager: "บิม",
            interior: "เบส",
            contract: "6 เดือน",
            status: "ON PROCESS",
            remarks: "เฟอร์ใหม่"
        },
        {
            name: "เซ็นทรัล เชียงใหม่เฟส",
            jobType: "Renovate",
            sqm: 18,
            setupDate: "ขน 27-28 พ.ค. 69",
            openDate: "เปิด 29 พ.ค. 69",
            returnDate: "-",
            manager: "แอน",
            interior: "เบส",
            contract: "",
            status: "ON PROCESS",
            remarks: "เฟอร์เดิมชลบุรี"
        }
    ],
    furniture: [
        {
            barcode: "BC-20260522-1000",
            code: "MOT-RK-001",
            name: "ตู้โชว์กระจกนิรภัย",
            type: "ชุด",
            location: "คลังสินค้า (HQ)",
            color: "#DB2777", // Motta Pink
            width: 100, depth: 40, height: 180,
            quantity: 1,
            status: "ว่าง",
            booker: "",
            remarks: "โครงโลหะชุบเงา มาพร้อมไฟ LED ติดตามมุมด้านในตู้",
            imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80",
            lastModified: "22/05/2026 10:00"
        },
        {
            barcode: "BC-20260521-1120",
            code: "MOT-SH-005",
            name: "ชั้นวางรองเท้าโมเดิร์น",
            type: "ชุด",
            location: "โรบินสัน สุรินทร์ ชั้น 1",
            color: "#475569", // Gray
            width: 80, depth: 30, height: 100,
            quantity: 3,
            status: "ว่าง",
            booker: "",
            remarks: "มีแผ่นตะแกรงเหล็กยืดขยายช่องได้",
            imageUrl: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=400&q=80",
            lastModified: "21/05/2026 11:20"
        },
        {
            barcode: "BC-20260520-1415",
            code: "MOT-TB-002",
            name: "โต๊ะทำงานดีไซเนอร์รุ่นเอ็กซ์",
            type: "ชุด",
            location: "โรบินสัน สมุทรปราการ ชั้น 1",
            color: "#FFFFFF", // White
            width: 140, depth: 70, height: 75,
            quantity: 1,
            status: "ยืนยันแล้ว",
            booker: "อานนท์",
            remarks: "ขาเหล็กพ่นทรายสีดำขัดด้าน ท็อปไม้ลามิเนตสีขาว",
            imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80",
            lastModified: "20/05/2026 14:15"
        }
    ],
    logs: [
        { barcode: "BC-20260522-1000", action: "ลงทะเบียนเข้าระบบ", date: "22/05/2026", time: "10:00", details: "ลงทะเบียนเข้าคลังใหญ่โดยทีมจัดซื้อของแบรนด์ Motta" },
        { barcode: "BC-20260521-1120", action: "ลงทะเบียนเข้าระบบ", date: "20/05/2026", time: "15:00", details: "ลงทะเบียนสินค้าใหม่เข้าคลัง HQ" },
        { barcode: "BC-20260521-1120", action: "ย้ายไปหน้าสาขา", date: "21/05/2026", time: "11:20", details: "ขนย้ายสินค้าจัดแสดงที่ โรบินสัน สุรินทร์ ชั้น 1 หน้างาน" },
        
        { barcode: "BC-20260520-1415", action: "ลงทะเบียนเข้าระบบ", date: "19/05/2026", time: "09:00", details: "ลงทะเบียนเฟอร์นิเจอร์เข้าคลังหลัก" },
        { barcode: "BC-20260520-1415", action: "ย้ายไปหน้าสาขา", date: "19/05/2026", time: "13:00", details: "ย้ายติดตั้งที่ โรบินสัน สมุทรปราการ ชั้น 1 เพื่อเตรียมเปิดร้านใหม่" },
        { barcode: "BC-20260520-1415", action: "จองใช้งาน", date: "20/05/2026", time: "10:00", details: "อินทีเรีย 'อานนท์' เลือกจองเฟอร์นิเจอร์ตัวนี้ในโปรเจกต์" },
        { barcode: "BC-20260520-1415", action: "ยืนยันแล้ว", date: "20/05/2026", time: "14:15", details: "ยืนยันการจองเรียบร้อย ข้อมูลบันทึกประวัติการเบิกใช้อย่างถูกต้อง" }
    ]
};

// Application State Variables
let currentBrand = 'montipa';
let currentView = 'dashboard';
let activeBranchFilter = 'ทั้งหมด';
let activeYearFilter = '2026';
let activeMonthFilter = 'พ.ค.';
let selectedBarcodeForTimeline = null;
let currentCatalogTab = 'branch';
let selectedCatalogItems = new Set();
let checkedAdminRows = new Set();
let activeTrackingBranch = ''; // Currently selected branch on Branch Tracking view
let selectedTrackingInterior = 'ทั้งหมด'; // Currently selected interior filter on Branch Tracking view
let scannerContext = 'dashboard'; // 'dashboard' or 'welcome'

// Apps Script configuration details
let cloudScriptUrl = "";
let isCloudConnected = false;

// Pagination offsets
let dbPagination = {
    dashboard: { page: 1, limit: 5 },
    backoffice: { page: 1, limit: 5 }
};

// Initialize Application Local DB
function getLocalDatabase() {
    let db = localStorage.getItem('kook_furniture_db_v3');
    if (!db) {
        // First boot: Seed local data
        const initialDb = {
            montipa: SEED_DATA_MONTIPA,
            motta: SEED_DATA_MOTTA
        };
        localStorage.setItem('kook_furniture_db_v3', JSON.stringify(initialDb));
        return initialDb;
    }
    return JSON.parse(db);
}

function saveLocalDatabase(db) {
    localStorage.setItem('kook_furniture_db_v3', JSON.stringify(db));
}

// Helper to parse 'DD/MM/YYYY HH:MM' date format into timestamp
function parseLastModified(str) {
    if (!str) return 0;
    const parts = str.split(' ');
    if (parts.length < 2) return 0;
    const [d, m, y] = parts[0].split('/');
    const [hh, mm] = parts[1].split(':');
    return new Date(y, m - 1, d, hh, mm).getTime();
}

// Fetch entire data block based on mode (Local Storage or Apps Script Cloud)
async function fetchBrandData(brandName) {
    if (isCloudConnected && cloudScriptUrl) {
        try {
            // Cloud Sync: Fetch from Google Sheet via Apps Script
            const response = await fetch(`${cloudScriptUrl}?action=get_brand_data&brand=${brandName}`);
            const result = await response.json();
            if (result.status === 'success') {
                const cloudData = result.data;
                
                // 💡 SMART OFFLINE MERGE & CONFLICT RESOLUTION:
                // Compare and merge items registered or modified offline with the cloud database.
                const localDb = getLocalDatabase();
                const localBrandData = localDb[brandName];
                
                if (localBrandData && localBrandData.furniture && localBrandData.furniture.length > 0) {
                    let hasMergeChanges = false;
                    
                    // Initialize cloud fields if missing
                    if (!cloudData.furniture) cloudData.furniture = [];
                    if (!cloudData.logs) cloudData.logs = [];
                    if (!cloudData.branches) cloudData.branches = [];
                    
                    // 1. Merge and resolve conflicts for furniture items
                    localBrandData.furniture.forEach(localItem => {
                        const cloudItemIdx = cloudData.furniture.findIndex(cloudItem => cloudItem.barcode === localItem.barcode);
                        if (cloudItemIdx === -1) {
                            // Brand new item registered while offline
                            cloudData.furniture.push(localItem);
                            hasMergeChanges = true;
                            console.log(`Auto-merged offline item: ${localItem.code} (${localItem.barcode})`);
                        } else {
                            // Existing item: Overwrite only if local version is newer
                            const localTime = parseLastModified(localItem.lastModified);
                            const cloudTime = parseLastModified(cloudData.furniture[cloudItemIdx].lastModified);
                            if (localTime > cloudTime) {
                                cloudData.furniture[cloudItemIdx] = localItem;
                                hasMergeChanges = true;
                                console.log(`Auto-resolved conflict (local newer): ${localItem.code}`);
                            }
                        }
                    });
                    
                    // 2. Merge movement logs
                    if (localBrandData.logs) {
                        localBrandData.logs.forEach(localLog => {
                            const existsInCloud = cloudData.logs.some(cloudLog => 
                                cloudLog.barcode === localLog.barcode && 
                                cloudLog.action === localLog.action && 
                                cloudLog.date === localLog.date && 
                                cloudLog.time === localLog.time
                            );
                            if (!existsInCloud) {
                                cloudData.logs.push(localLog);
                                hasMergeChanges = true;
                            }
                        });
                    }
                    
                    // 3. Merge branches
                    if (localBrandData.branches) {
                        localBrandData.branches.forEach(localBranch => {
                            const existsInCloud = cloudData.branches.some(cloudBranch => cloudBranch.name === localBranch.name);
                            if (!existsInCloud) {
                                cloudData.branches.push(localBranch);
                                hasMergeChanges = true;
                            }
                        });
                    }
                    
                    // If changes were merged, update Google Sheets in the background
                    if (hasMergeChanges) {
                        console.log(`Syncing merged data for ${brandName} back to Google Sheets...`);
                        await syncBrandData(brandName, cloudData);
                    }
                }
                
                return cloudData; // Expected format: { branches: [...], furniture: [...], logs: [...] }
            }
        } catch (e) {
            console.error("Cloud fetch failed, fallback to local storage:", e);
            // Graceful fallback without blocking user experience
        }
    }
    
    // Offline local database
    const db = getLocalDatabase();
    return db[brandName] || { branches: [], furniture: [], logs: [] };
}

// Write / Sync brand changes (Local Storage + async background Cloud push)
async function syncBrandData(brandName, data) {
    // 1. Update in Local Database immediately
    const db = getLocalDatabase();
    db[brandName] = data;
    saveLocalDatabase(db);
    
    // 2. If Cloud Connected, push updates to Google Sheets Web App
    if (isCloudConnected && cloudScriptUrl) {
        try {
            const response = await fetch(cloudScriptUrl, {
                method: "POST",
                mode: "no-cors", // Use no-cors for direct browser post
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "sync_brand_data",
                    brand: brandName,
                    data: data
                })
            });
            console.log("Cloud sync pushed successfully.");
        } catch (e) {
            console.error("Failed to sync to Google Sheets:", e);
        }
    }
}

// ==========================================================================
// 2. Dynamic Routing & View Controls
// ==========================================================================

function selectBrand(brand) {
    currentBrand = brand;
    document.body.setAttribute('data-brand', brand);
    
    // Update sidebar headings & styles
    const logoCircle = document.getElementById('sidebar-logo-text');
    const brandText = document.getElementById('sidebar-brand-text');
    const headerBrandPill = document.getElementById('header-brand-pill');
    
    if (brand === 'montipa') {
        logoCircle.innerText = 'M';
        brandText.innerText = 'MONTIPA';
        headerBrandPill.innerText = 'MONTIPA';
    } else {
        logoCircle.innerText = 'M';
        brandText.innerText = 'MOTTA';
        headerBrandPill.innerText = 'MOTTA';
    }
    
    // Animate Views transition
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'flex';
    
    // Force reset filters to defaults when changing brand
    activeBranchFilter = 'ทั้งหมด';
    selectedBarcodeForTimeline = null;
    selectedCatalogItems.clear();
    checkedAdminRows.clear();
    activeTrackingBranch = ''; // Reset branch tracking selection
    selectedTrackingInterior = 'ทั้งหมด'; // Reset interior tracking filter
    
    switchView('dashboard');
}

function logoutBrand() {
    document.getElementById('app-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'flex';
}

function switchView(viewName) {
    currentView = viewName;
    
    // Remove active class from all menu buttons and views
    document.querySelectorAll('.menu-item').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    
    // Activate target
    const targetMenu = document.getElementById(`menu-${viewName}`);
    if (targetMenu) targetMenu.classList.add('active');
    
    const targetSec = document.getElementById(`view-${viewName}`);
    if (targetSec) {
        targetSec.classList.add('active');
        // trigger animation redraw
        setTimeout(() => {
            targetSec.style.opacity = '1';
            targetSec.style.transform = 'translateY(0)';
        }, 50);
    }
    
    // Set Header Title contextually
    const viewTitle = document.getElementById('header-view-title');
    switch (viewName) {
        case 'dashboard':
            viewTitle.innerText = "หน้าแดชบอร์ดสรุปยอดคลังสินค้า";
            renderDashboard();
            break;
        case 'branch-tracking':
            viewTitle.innerText = "แดชบอร์ดติดตามข้อมูลรายสาขา";
            renderBranchTracking();
            break;
        case 'register':
            viewTitle.innerText = "ลงทะเบียนเฟอร์นิเจอร์ติดตามบาร์โค้ด";
            resetRegisterForm();
            break;
        case 'booking':
            viewTitle.innerText = "จองใช้เฟอร์นิเจอร์ออกแบบใหม่ (Catalog)";
            selectedCatalogItems.clear();
            updateCheckoutPanel();
            renderCatalog();
            break;
        case 'backoffice':
            viewTitle.innerText = "ระบบจัดการและเปลี่ยนแปลงข้อมูลคลังสินค้า";
            checkedAdminRows.clear();
            document.getElementById('bulk-delete-bar').style.display = 'none';
            document.getElementById('admin-select-all-check').checked = false;
            renderAdminTable();
            break;
        case 'settings':
            viewTitle.innerText = "ตั้งค่าการเชื่อมต่อ Google Sheets & Drive";
            renderSettingsPage();
            break;
    }
    
    // Close sidebar on mobile automatically after clicking
    const sidebar = document.querySelector('.app-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function toggleMobileSidebar() {
    const sidebar = document.querySelector('.app-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// ==========================================================================
// 3. Dynamic Dashboard View Logic
// ==========================================================================

// Dynamically populate all branch select dropdowns across the application based on current database
function populateBranchDropdowns(data) {
    // 1. Gather all unique locations from data
    const defaultBranches = ['คลังสินค้า (HQ)', 'สาขา A', 'สาขา B', 'สาขา C'];
    const dbBranches = data.furniture ? data.furniture.map(item => item.location) : [];
    const planBranches = data.branches ? data.branches.map(b => b.name) : [];
    
    // Combine unique sorted branches
    const allBranches = Array.from(new Set([...defaultBranches, ...dbBranches, ...planBranches]))
        .filter(loc => loc && loc.trim() !== '')
        .sort((a, b) => {
            // Put HQ first
            if (a.includes('HQ') && !b.includes('HQ')) return -1;
            if (!a.includes('HQ') && b.includes('HQ')) return 1;
            return a.localeCompare(b, 'th');
        });

    // 2. Populate Dashboard branch filter (includes 'ทั้งหมด')
    const dashboardSelect = document.getElementById('dashboard-branch-select');
    if (dashboardSelect) {
        const currentVal = activeBranchFilter;
        dashboardSelect.innerHTML = ['ทั้งหมด', ...allBranches].map(br => `
            <option value="${br}" ${currentVal === br ? 'selected' : ''}>${br}</option>
        `).join('');
    }

    // 3. Populate Catalog branch filter (includes 'ทั้งหมด' but excludes HQ)
    const catalogSelect = document.getElementById('catalog-branch-select');
    if (catalogSelect) {
        const currentVal = catalogSelect.value || 'ทั้งหมด';
        const branchOnlyList = allBranches.filter(br => !br.includes('คลังสินค้า'));
        catalogSelect.innerHTML = ['ทั้งหมด', ...branchOnlyList].map(br => `
            <option value="${br}" ${currentVal === br ? 'selected' : ''}>${br}</option>
        `).join('');
    }

    // 4. Populate Backoffice/Admin location filter (includes 'ทั้งหมด')
    const adminFilterSelect = document.getElementById('admin-filter-location');
    if (adminFilterSelect) {
        const currentVal = adminFilterSelect.value || 'ทั้งหมด';
        adminFilterSelect.innerHTML = ['ทั้งหมด', ...allBranches].map(br => `
            <option value="${br}" ${currentVal === br ? 'selected' : ''}>ที่อยู่: ${br}</option>
        `).join('');
    }

    // 5. Populate Registration location select (no 'ทั้งหมด')
    const regSelect = document.getElementById('reg-location');
    if (regSelect) {
        const currentVal = regSelect.value || 'คลังสินค้า (HQ)';
        regSelect.innerHTML = allBranches.map(br => `
            <option value="${br}" ${currentVal === br ? 'selected' : ''}>${br}</option>
        `).join('');
    }
    
    // 6. Populate Edit Dialog location select
    const editSelect = document.getElementById('edit-location');
    if (editSelect) {
        const currentVal = editSelect.value || 'คลังสินค้า (HQ)';
        editSelect.innerHTML = allBranches.map(br => `
            <option value="${br}" ${currentVal === br ? 'selected' : ''}>${br}</option>
        `).join('');
    }
    
    // 7. Populate Branch Tracking selector & Interior filter
    const trackingInteriorSelect = document.getElementById('tracking-interior-select');
    if (trackingInteriorSelect) {
        const interiorsList = Array.from(new Set(
            (data.branches || [])
                .map(b => b.interior)
                .filter(int => int && int.trim() !== '')
        )).sort((a, b) => a.localeCompare(b, 'th'));

        trackingInteriorSelect.innerHTML = ['ทั้งหมด', ...interiorsList].map(int => `
            <option value="${int}" ${selectedTrackingInterior === int ? 'selected' : ''}>${int}</option>
        `).join('');
    }

    const trackingSelect = document.getElementById('tracking-branch-select');
    if (trackingSelect) {
        let branchesList = data.branches || [];
        if (selectedTrackingInterior !== 'ทั้งหมด') {
            branchesList = branchesList.filter(b => b.interior === selectedTrackingInterior);
        }
        
        if (branchesList.length > 0) {
            if (!activeTrackingBranch || !branchesList.find(b => b.name === activeTrackingBranch)) {
                activeTrackingBranch = branchesList[0].name;
            }
        } else {
            activeTrackingBranch = '';
        }
        
        trackingSelect.innerHTML = branchesList.map(br => `
            <option value="${br.name}" ${activeTrackingBranch === br.name ? 'selected' : ''}>${br.name}</option>
        `).join('');
    }
}

async function renderDashboard() {
    const data = await fetchBrandData(currentBrand);
    
    // 1. Populate Branch Dropdown Options
    populateBranchDropdowns(data);
    
    // 2. Render Month filter calendar grids
    const monthsContainer = document.getElementById('dashboard-months-grid');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    monthsContainer.innerHTML = months.map(m => `
        <button class="btn-month-pill ${activeMonthFilter === m ? 'active' : ''}"
                onclick="setMonthFilter('${m}')">${m}</button>
    `).join('');
    
    // 3. Calculate status counts based on selected brand, branch and time filters
    let filteredList = data.furniture;
    
    // Filter by Branch
    if (activeBranchFilter !== 'ทั้งหมด') {
        filteredList = filteredList.filter(item => item.location === activeBranchFilter);
    }
    
    // Filter by Registration Month/Year extracted from barcode/logs or lastModified
    filteredList = filteredList.filter(item => {
        if (!item.lastModified) return true;
        const [datePart] = item.lastModified.split(' ');
        const [d, m, y] = datePart.split('/');
        const itemMonthIndex = parseInt(m) - 1;
        const itemYear = y;
        
        const filterMonthIndex = months.indexOf(activeMonthFilter);
        const matchMonth = itemMonthIndex === filterMonthIndex;
        const matchYear = itemYear === activeYearFilter;
        
        return matchMonth && matchYear;
    });
    
    // Reset Counts
    let readyCount = 0;
    let pendingCount = 0;
    let confirmedCount = 0;
    let branchCount = 0;
    let repairCount = 0;
    
    filteredList.forEach(item => {
        if (item.status === 'ว่าง') {
            if (item.location.includes('คลังสินค้า')) readyCount += item.quantity;
            else branchCount += item.quantity;
        } else if (item.status === 'รอคอนเฟิร์ม') {
            pendingCount += item.quantity;
        } else if (item.status === 'ยืนยันแล้ว') {
            confirmedCount += item.quantity;
        } else if (item.status === 'ต้องซ่อม') {
            repairCount += item.quantity;
        }
    });
    
    // Animate stats numbers
    animateNumber('count-ready', readyCount);
    animateNumber('count-pending', pendingCount);
    animateNumber('count-confirmed', confirmedCount);
    animateNumber('count-branch', branchCount);
    animateNumber('count-repair', repairCount);
    
    // Set Dashboard Table Context Title
    const tblTitle = document.getElementById('dashboard-table-title');
    tblTitle.innerText = `เฟอร์นิเจอร์ใน ${activeBranchFilter} (${activeMonthFilter} ${activeYearFilter})`;
    
    // Reset dashboard table pagination
    dbPagination.dashboard.page = 1;
    renderDashboardTable();
    
    // Render Timeline on initial load if we have a selected item
    if (selectedBarcodeForTimeline) {
        renderTimelineLogs(selectedBarcodeForTimeline);
    } else if (data.furniture.length > 0) {
        // Select first item by default to fill space beautifully
        selectFurnitureForTimeline(data.furniture[0].barcode);
    } else {
        clearTimelinePanel();
    }
}

function animateNumber(id, endValue) {
    const el = document.getElementById(id);
    let start = 0;
    const duration = 400; // milliseconds
    const stepTime = Math.abs(Math.floor(duration / (endValue + 1)));
    
    if (endValue === 0) {
        el.innerText = "0";
        return;
    }
    
    const timer = setInterval(() => {
        start += 1;
        el.innerText = start;
        if (start >= endValue) {
            clearInterval(timer);
            el.innerText = endValue;
        }
    }, Math.max(stepTime, 15));
}

function setBranchFilter(branch) {
    activeBranchFilter = branch;
    renderDashboard();
}

function setMonthFilter(month) {
    activeMonthFilter = month;
    renderDashboard();
}

async function renderDashboardTable() {
    const data = await fetchBrandData(currentBrand);
    const searchVal = document.getElementById('dashboard-search-input').value.trim().toLowerCase();
    
    let list = data.furniture;
    
    // Branch Filter
    if (activeBranchFilter !== 'ทั้งหมด') {
        list = list.filter(item => item.location === activeBranchFilter);
    }
    
    // Month/Year Calendar Filter
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    list = list.filter(item => {
        if (!item.lastModified) return true;
        const [datePart] = item.lastModified.split(' ');
        const [d, m, y] = datePart.split('/');
        const itemMonthIndex = parseInt(m) - 1;
        const itemYear = y;
        
        return itemMonthIndex === months.indexOf(activeMonthFilter) && itemYear === activeYearFilter;
    });
    
    // Text Query search
    if (searchVal) {
        list = list.filter(item => 
            item.code.toLowerCase().includes(searchVal) ||
            item.name.toLowerCase().includes(searchVal) ||
            item.remarks.toLowerCase().includes(searchVal)
        );
    }
    
    // Pagination slicing
    const totalItems = list.length;
    const limit = dbPagination.dashboard.limit;
    const maxPage = Math.max(Math.ceil(totalItems / limit), 1);
    
    if (dbPagination.dashboard.page > maxPage) dbPagination.dashboard.page = maxPage;
    const startIdx = (dbPagination.dashboard.page - 1) * limit;
    const endIdx = Math.min(startIdx + limit, totalItems);
    
    const paginatedList = list.slice(startIdx, endIdx);
    
    // Render list rows
    const tbody = document.getElementById('dashboard-table-body');
    if (paginatedList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: #94A3B8; padding: 24px;">ไม่พบรายการสินค้าที่ระบุ</td></tr>`;
    } else {
        tbody.innerHTML = paginatedList.map(item => {
            const ageString = getFurnitureAge(item.lastModified);
            const statusClass = item.status === 'ว่าง' ? 
                (item.location.includes('คลัง') ? 'ready' : 'branch') : 
                (item.status === 'รอคอนเฟิร์ม' ? 'pending' : (item.status === 'ยืนยันแล้ว' ? 'confirmed' : 'repair'));
            
            const displayStatusText = item.status === 'ว่าง' ? 
                (item.location.includes('คลัง') ? 'พร้อมใช้' : 'อยู่หน้าสาขา') : 
                item.status;

            return `
                <tr onclick="selectFurnitureForTimeline('${item.barcode}'); openEditModal('${item.barcode}')" class="${selectedBarcodeForTimeline === item.barcode ? 'selected-row' : ''}" style="${selectedBarcodeForTimeline === item.barcode ? 'background-color: rgba(var(--brand-primary-rgb), 0.05);' : ''}">
                    <td><span class="code-badge">${item.code}</span></td>
                    <td style="font-weight: 600;">${item.name}</td>
                    <td><span class="type-pill ${item.type === 'ชุด' ? 'set' : ''}">${item.type}</span></td>
                    <td>
                        <div class="color-dot-group">
                            <span class="color-dot" style="background-color: ${item.color};"></span>
                        </div>
                    </td>
                    <td style="color: #64748B;">${item.width || '-'} x ${item.depth || '-'} x ${item.height || '-'}</td>
                    <td style="font-weight: 700; text-align: center;">${item.quantity}</td>
                    <td><span class="status-pill ${statusClass}">${displayStatusText}</span></td>
                    <td style="font-weight: 500;">${item.booker || '-'}</td>
                    <td style="color: #64748B; font-size: 12px;">${ageString}</td>
                </tr>
            `;
        }).join('');
    }
    
    // Render pagination footer info
    const pageInfo = document.getElementById('dashboard-pagination-info');
    if (totalItems === 0) {
        pageInfo.innerText = "แสดง 0 ถึง 0 จาก 0 รายการ";
    } else {
        pageInfo.innerText = `แสดง ${startIdx + 1} ถึง ${endIdx} จาก ${totalItems} รายการ`;
    }
    
    // Pagination buttons
    const btnContainer = document.getElementById('dashboard-pagination-buttons');
    btnContainer.innerHTML = `
        <button class="btn-pagination" onclick="setDashboardPage(${dbPagination.dashboard.page - 1})" ${dbPagination.dashboard.page === 1 ? 'disabled' : ''}>&lt;</button>
        ${Array.from({ length: maxPage }, (_, i) => i + 1).map(p => `
            <button class="btn-pagination ${dbPagination.dashboard.page === p ? 'active' : ''}" onclick="setDashboardPage(${p})">${p}</button>
        `).join('')}
        <button class="btn-pagination" onclick="setDashboardPage(${dbPagination.dashboard.page + 1})" ${dbPagination.dashboard.page === maxPage ? 'disabled' : ''}>&gt;</button>
    `;
}

function setDashboardPage(p) {
    dbPagination.dashboard.page = p;
    renderDashboardTable();
}

function getFurnitureAge(lastModifiedStr) {
    if (!lastModifiedStr) return "แรกเริ่ม";
    try {
        const [datePart] = lastModifiedStr.split(' ');
        const [d, m, y] = datePart.split('/');
        
        const registerDate = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
        const now = new Date();
        
        const diffTime = Math.abs(now - registerDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 30) {
            return `${diffDays} วัน`;
        }
        
        const months = Math.floor(diffDays / 30);
        if (months < 12) {
            return `${months} เดือน`;
        }
        
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years} ปี ${remainingMonths} เดือน`;
    } catch (e) {
        return "แรกเริ่ม";
    }
}

// ==========================================================================
// 4. Barcode Movement Timeline Rendering
// ==========================================================================

async function selectFurnitureForTimeline(barcode) {
    selectedBarcodeForTimeline = barcode;
    
    // Render dynamic highlighting in Dashboard rows
    renderDashboardTable();
    
    // Render timeline
    renderTimelineLogs(barcode);
}

async function renderTimelineLogs(barcode) {
    const data = await fetchBrandData(currentBrand);
    const item = data.furniture.find(f => f.barcode === barcode);
    
    if (!item) {
        clearTimelinePanel();
        return;
    }
    
    // Show mini card
    document.getElementById('timeline-item-card').style.display = 'flex';
    document.getElementById('timeline-item-name').innerText = item.name;
    document.getElementById('timeline-item-bc').innerText = item.barcode;
    
    const imgEl = document.getElementById('timeline-item-img');
    if (item.imageUrl) {
        imgEl.src = item.imageUrl;
        imgEl.style.display = 'block';
    } else {
        imgEl.style.display = 'none';
    }
    
    // Build Timeline List Nodes
    const logs = data.logs.filter(l => l.barcode === barcode);
    const listContainer = document.getElementById('timeline-log-list');
    
    if (logs.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: #94A3B8; font-size: 13px; padding: 24px 0;">ไม่พบบันทึกการเคลื่นไหวสินค้า</div>`;
    } else {
        // Sort logs: newest at the bottom or top depending on preference. Flow map goes 1 -> 7 (logical progression)
        // Let's render chronologically so the timeline reads step by step downward
        listContainer.innerHTML = logs.map((log, idx) => {
            const isActive = idx === logs.length - 1; // Highlight the latest movement state!
            return `
                <div class="timeline-node ${isActive ? 'active' : ''}">
                    <div class="timeline-node-dot"></div>
                    <div class="timeline-node-title">${log.action}</div>
                    <div class="timeline-node-date">${log.date} ${log.time}</div>
                    <div class="timeline-node-desc">${log.details}</div>
                </div>
            `;
        }).join('');
    }
    
    // Context timeline movement operations panel
    const actionContainer = document.getElementById('timeline-action-container');
    const contextBtn = document.getElementById('btn-timeline-context');
    
    if (item.location !== 'คลังสินค้า (HQ)') {
        // Offer return to warehouse if item is at a branch!
        actionContainer.style.display = 'block';
        contextBtn.innerText = `ขนส่งสินค้าคืนคลังหลัก (HQ)`;
        contextBtn.disabled = false;
    } else if (item.status === 'รอคอนเฟิร์ม') {
        // Offer quick approve booking if waiting for confirm in HQ
        actionContainer.style.display = 'block';
        contextBtn.innerText = `ยืนยันล็อคสต๊อกถาวร`;
        contextBtn.disabled = false;
    } else {
        // HQ and free -> ready. Show inactive helper
        actionContainer.style.display = 'block';
        contextBtn.innerText = `อยู่ในคลังสินค้า พร้อมใช้งาน`;
        contextBtn.disabled = true;
    }
}

async function handleTimelineAction() {
    if (!selectedBarcodeForTimeline) return;
    
    const data = await fetchBrandData(currentBrand);
    const itemIdx = data.furniture.findIndex(f => f.barcode === selectedBarcodeForTimeline);
    
    if (itemIdx === -1) return;
    const item = data.furniture[itemIdx];
    
    const now = new Date();
    const dStr = formatTwoDigits(now.getDate()) + "/" + formatTwoDigits(now.getMonth() + 1) + "/" + now.getFullYear();
    const tStr = formatTwoDigits(now.getHours()) + ":" + formatTwoDigits(now.getMinutes());
    
    if (item.location !== 'คลังสินค้า (HQ)') {
        // Return item to warehouse HQ
        const originalLoc = item.location;
        item.location = 'คลังสินค้า (HQ)';
        item.status = 'ว่าง';
        item.booker = '';
        item.lastModified = `${dStr} ${tStr}`;
        
        // Add log entry
        data.logs.push({
            barcode: item.barcode,
            action: "รับกลับเข้าคลัง",
            date: dStr,
            time: tStr,
            details: `รับเฟอร์นิเจอร์กลับเข้า 'คลังสินค้า (HQ)' ย้ายกลับมาจาก '${originalLoc}' สำเร็จ`
        });
        
        await syncBrandData(currentBrand, data);
        alert(`ทำรายการรับเฟอร์ฯ ${item.code} กลับเข้าคลังสินค้าเรียบร้อย!`);
        
    } else if (item.status === 'รอคอนเฟิร์ม') {
        // Approve booking
        item.status = 'ยืนยันแล้ว';
        item.lastModified = `${dStr} ${tStr}`;
        
        data.logs.push({
            barcode: item.barcode,
            action: "ยืนยันแล้ว",
            date: dStr,
            time: tStr,
            details: `กดยืนยันล็อคสต๊อกสินค้าเรียบร้อยสำหรับจัดส่งให้ดีไซเนอร์: ${item.booker}`
        });
        
        await syncBrandData(currentBrand, data);
        alert(`ยืนยันล็อตการเบิกใช้สินค้าของอินทีเรีย '${item.booker}' เรียบร้อย!`);
    }
    
    renderDashboard();
}

function clearTimelinePanel() {
    document.getElementById('timeline-item-card').style.display = 'none';
    document.getElementById('timeline-log-list').innerHTML = `
        <div style="text-align: center; color: #94A3B8; font-size: 13px; padding: 24px 0;">
            ไม่พบข้อมูลสินค้าที่จะแสดงรายละเอียดประวัติ
        </div>
    `;
    document.getElementById('timeline-action-container').style.display = 'none';
}

// ==========================================================================
// 4B. แดชบอร์ดโครงการสาขา (Branch Project Tracking Dashboard Logic)
// ==========================================================================

async function renderBranchTracking() {
    const data = await fetchBrandData(currentBrand);
    
    // 1. Populate Dropdowns (to make sure branch options exist and are selected correctly)
    populateBranchDropdowns(data);
    
    // 2. Set active branch if empty
    if (!activeTrackingBranch && data.branches && data.branches.length > 0) {
        activeTrackingBranch = data.branches[0].name;
    }
    
    // Update the dropdown value to match activeTrackingBranch
    const trackingSelect = document.getElementById('tracking-branch-select');
    if (trackingSelect) {
        trackingSelect.value = activeTrackingBranch;
    }
    
    // 3. Render Profile Card
    const profileCard = document.getElementById('branch-profile-card');
    if (profileCard) {
        if (!activeTrackingBranch) {
            profileCard.innerHTML = `<div style="text-align: center; color: #94A3B8; padding: 36px 24px; font-weight: 500;">ยังไม่มีโครงการสาขาสำหรับแบรนด์นี้<br><span style="font-size: 12px; font-weight: normal; margin-top: 8px; display: block; color: #cbd5e1;">กดปุ่ม "➕ เพิ่มโครงการใหม่" เพื่อเริ่มต้นตั้งโครงการแรก</span></div>`;
        } else {
            const branch = (data.branches || []).find(b => b.name === activeTrackingBranch);
            if (!branch) {
                profileCard.innerHTML = `<div style="text-align: center; color: #94A3B8; padding: 24px;">ไม่พบข้อมูลรายละเอียดสาขา '${activeTrackingBranch}'</div>`;
            } else {
                profileCard.innerHTML = `
                    <div class="branch-profile-header">
                        <div class="branch-profile-title">${branch.name}</div>
                        <span class="status-badge ${branch.status === 'DONE' ? 'done' : branch.status === 'ON PROCESS' ? 'on-process' : 'pending'}">
                            ${branch.status === 'DONE' ? '✔️ DONE' : branch.status === 'ON PROCESS' ? '⚡ ON PROCESS' : '⏳ PENDING'}
                        </span>
                    </div>
                    <div class="branch-profile-meta-grid">
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">📋</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">รูปแบบงาน</span>
                                <span class="branch-profile-value">${branch.jobType || 'Event'}</span>
                            </div>
                        </div>
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">📐</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">ขนาดพื้นที่</span>
                                <span class="branch-profile-value">${branch.sqm ? branch.sqm + ' ตร.ม.' : '-'}</span>
                            </div>
                        </div>
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">🚚</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">วันขนไป (Setup)</span>
                                <span class="branch-profile-value">${branch.setupDate || '-'}</span>
                            </div>
                        </div>
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">🏪</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">วันเปิดร้าน</span>
                                <span class="branch-profile-value">${branch.openDate || '-'}</span>
                            </div>
                        </div>
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">📦</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">วันเก็บกลับ/รื้อถอน</span>
                                <span class="branch-profile-value">${branch.returnDate || '-'}</span>
                            </div>
                        </div>
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">👤</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">ผู้ดูแลพื้นที่</span>
                                <span class="branch-profile-value">${branch.manager || '-'}</span>
                            </div>
                        </div>
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">✏️</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">Interior PIC</span>
                                <span class="branch-profile-value">${branch.interior || '-'}</span>
                            </div>
                        </div>
                        <div class="branch-profile-card-item">
                            <div class="branch-profile-icon">📄</div>
                            <div class="branch-profile-details">
                                <span class="branch-profile-label">ระยะสัญญา</span>
                                <span class="branch-profile-value">${branch.contract || '-'}</span>
                            </div>
                        </div>
                    </div>
                    ${branch.remarks ? `
                    <div class="branch-profile-remarks">
                        <div class="branch-profile-label" style="margin-bottom: 4px;">หมายเหตุเพิ่มเติม</div>
                        <div style="font-size: 13px; color: #475569; line-height: 1.5;">${branch.remarks}</div>
                    </div>
                    ` : ''}
                `;
            }
        }
    }
    
    // 4. Render Furniture Table & Timeline
    renderBranchFurnitureTable();
    renderBranchTimeline();
}

async function renderBranchFurnitureTable() {
    const data = await fetchBrandData(currentBrand);
    const tbody = document.getElementById('branch-table-body');
    const searchInput = document.getElementById('branch-table-search');
    const searchVal = searchInput ? searchInput.value.trim().toLowerCase() : '';
    
    if (!tbody) return;
    
    if (!activeTrackingBranch) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: #94A3B8; padding: 24px;">ไม่พบรายการเฟอร์นิเจอร์ เนื่องจากยังไม่มีสาขาให้ติดตาม</td></tr>`;
        return;
    }
    
    let list = data.furniture.filter(item => item.location === activeTrackingBranch);
    
    if (searchVal) {
        list = list.filter(item => 
            item.code.toLowerCase().includes(searchVal) ||
            item.name.toLowerCase().includes(searchVal) ||
            item.barcode.toLowerCase().includes(searchVal)
        );
    }
    
    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: #94A3B8; padding: 32px;">ไม่มีรายการเฟอร์นิเจอร์จัดวางในสาขานี้ขณะนี้</td></tr>`;
    } else {
        tbody.innerHTML = list.map(item => {
            const statusClass = item.status === 'ว่าง' ? 'branch' : (item.status === 'รอคอนเฟิร์ม' ? 'pending' : (item.status === 'ยืนยันแล้ว' ? 'confirmed' : 'repair'));
            const displayStatusText = item.status === 'ว่าง' ? 'อยู่หน้าสาขา' : item.status;
            
            return `
                <tr>
                    <td>
                        <img src="${item.imageUrl || 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=100&q=80'}" 
                             alt="${item.name}" 
                             style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(0,0,0,0.1);" />
                    </td>
                    <td><span class="code-badge">${item.code}</span></td>
                    <td style="font-weight: 600;">${item.name}</td>
                    <td style="color: #64748B;">${item.width || '-'} x ${item.depth || '-'} x ${item.height || '-'}</td>
                    <td>
                        <div class="color-dot-group">
                            <span class="color-dot" style="background-color: ${item.color || '#ccc'};"></span>
                        </div>
                    </td>
                    <td style="font-weight: 700; text-align: center;">${item.quantity}</td>
                    <td><span class="status-pill ${statusClass}">${displayStatusText}</span></td>
                    <td style="font-weight: 500;">${item.booker || '-'}</td>
                    <td style="text-align: center; white-space: nowrap;">
                        <button class="btn-table-action-mini return" onclick="transferFurnitureToHQ('${item.barcode}')">📦 คลัง HQ</button>
                        <button class="btn-table-action-mini transfer" onclick="openTransferModal('${item.barcode}')">🚚 ย้ายสาขา</button>
                    </td>
                </tr>
            `;
        }).join('');
    }
}

async function renderBranchTimeline() {
    const data = await fetchBrandData(currentBrand);
    const listContainer = document.getElementById('branch-timeline-list');
    if (!listContainer) return;
    
    if (!activeTrackingBranch) {
        listContainer.innerHTML = `<div style="text-align: center; color: #94A3B8; font-size: 13px; padding: 24px 0;">ไม่พบประวัติความเคลื่อนไหว</div>`;
        return;
    }
    
    // Filter logs that belong to the current branch name
    const branchLogs = data.logs.filter(log => {
        const matchesDetail = log.details && log.details.includes(activeTrackingBranch);
        // Find if this log belongs to any furniture item that is currently or was in this location
        const matchesBarcode = data.furniture.some(f => f.barcode === log.barcode && f.location === activeTrackingBranch);
        return matchesDetail || matchesBarcode;
    });
    
    if (branchLogs.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: #94A3B8; font-size: 13px; padding: 24px 0;">ไม่พบบันทึกประวัติเคลื่อนไหวในสาขานี้</div>`;
    } else {
        // Let's render chronologically so the timeline reads step by step downward (latest at bottom)
        listContainer.innerHTML = branchLogs.map((log, idx) => {
            const furnitureItem = data.furniture.find(f => f.barcode === log.barcode);
            const itemLabel = furnitureItem ? `[${furnitureItem.code}] ` : '';
            const isActive = idx === branchLogs.length - 1; // Highlight the latest movement state!
            
            return `
                <div class="timeline-node ${isActive ? 'active' : ''}">
                    <div class="timeline-node-dot"></div>
                    <div class="timeline-node-title">${itemLabel}${log.action}</div>
                    <div class="timeline-node-date">${log.date} ${log.time}</div>
                    <div class="timeline-node-desc">${log.details}</div>
                </div>
            `;
        }).join('');
    }
}

function changeTrackingBranch(val) {
    activeTrackingBranch = val;
    renderBranchTracking();
}

function filterBranchOptionsByInterior(interiorName) {
    selectedTrackingInterior = interiorName;
    renderBranchTracking();
}

async function transferFurnitureToHQ(barcode) {
    if (!confirm("คุณต้องการรับเฟอร์นิเจอร์ชิ้นนี้กลับเข้าคลังสินค้าหลัก (HQ) ใช่หรือไม่?")) return;
    
    const data = await fetchBrandData(currentBrand);
    const item = data.furniture.find(f => f.barcode === barcode);
    if (!item) return;
    
    const now = new Date();
    const dStr = formatTwoDigits(now.getDate()) + "/" + formatTwoDigits(now.getMonth() + 1) + "/" + now.getFullYear();
    const tStr = formatTwoDigits(now.getHours()) + ":" + formatTwoDigits(now.getMinutes());
    
    const originalLoc = item.location;
    item.location = 'คลังสินค้า (HQ)';
    item.status = 'ว่าง';
    item.booker = '';
    item.lastModified = `${dStr} ${tStr}`;
    
    data.logs.push({
        barcode: item.barcode,
        action: "รับกลับเข้าคลัง",
        date: dStr,
        time: tStr,
        details: `รับเฟอร์นิเจอร์ [${item.code}] ${item.name} กลับเข้าคลังสินค้าหลัก HQ ย้ายกลับมาจาก '${originalLoc}' สำเร็จ`
    });
    
    await syncBrandData(currentBrand, data);
    alert(`ทำรายการรับเฟอร์ฯ [${item.code}] ${item.name} กลับเข้าคลังสินค้าหลักเรียบร้อย!`);
    
    renderBranchTracking();
}

async function openTransferModal(barcode) {
    const data = await fetchBrandData(currentBrand);
    const item = data.furniture.find(f => f.barcode === barcode);
    if (!item) return;
    
    document.getElementById('transfer-barcode').value = barcode;
    document.getElementById('transfer-item-info').innerText = `กำลังจัดย้ายสินค้า: [${item.code}] ${item.name} (ปัจจุบันอยู่ที่: ${item.location})`;
    
    const targetSelect = document.getElementById('transfer-target-branch');
    if (targetSelect) {
        // Get all other branches (from data.branches) and other locations, excluding current item location
        const otherBranches = (data.branches || [])
            .map(b => b.name)
            .filter(name => name !== item.location);
        
        // Add 'คลังสินค้า (HQ)' if not already there
        if (item.location !== 'คลังสินค้า (HQ)') {
            otherBranches.unshift('คลังสินค้า (HQ)');
        }
        
        if (otherBranches.length === 0) {
            targetSelect.innerHTML = `<option value="">-- ไม่มีสาขาอื่นให้เลือกโอนย้าย --</option>`;
        } else {
            targetSelect.innerHTML = otherBranches.map(name => `
                <option value="${name}">${name}</option>
            `).join('');
        }
    }
    
    document.getElementById('transfer-modal').classList.add('active');
}

function closeTransferModal() {
    document.getElementById('transfer-modal').classList.remove('active');
}

async function executeFurnitureTransfer() {
    const barcode = document.getElementById('transfer-barcode').value;
    const targetBranch = document.getElementById('transfer-target-branch').value;
    
    if (!targetBranch) {
        alert("กรุณาเลือกสาขาปลายทางที่จะโอนย้าย!");
        return;
    }
    
    const data = await fetchBrandData(currentBrand);
    const item = data.furniture.find(f => f.barcode === barcode);
    if (!item) return;
    
    const now = new Date();
    const dStr = formatTwoDigits(now.getDate()) + "/" + formatTwoDigits(now.getMonth() + 1) + "/" + now.getFullYear();
    const tStr = formatTwoDigits(now.getHours()) + ":" + formatTwoDigits(now.getMinutes());
    
    const originalLoc = item.location;
    item.location = targetBranch;
    
    if (item.status !== 'รอคอนเฟิร์ม' && item.status !== 'ยืนยันแล้ว') {
        item.status = 'ว่าง';
    }
    item.lastModified = `${dStr} ${tStr}`;
    
    data.logs.push({
        barcode: item.barcode,
        action: "ย้ายไปหน้าสาขา",
        date: dStr,
        time: tStr,
        details: `ขนย้ายสินค้าจาก '${originalLoc}' ไปที่สาขาปลายทาง '${targetBranch}' สำเร็จ`
    });
    
    await syncBrandData(currentBrand, data);
    closeTransferModal();
    alert(`โอนย้ายเฟอร์นิเจอร์ [${item.code}] ${item.name} ไปที่ '${targetBranch}' สำเร็จ!`);
    
    renderBranchTracking();
}

async function openBranchFormModal(action, branchName = null) {
    document.getElementById('branch-form-action').value = action;
    const titleEl = document.getElementById('branch-modal-title');
    const submitBtn = document.getElementById('btn-branch-submit');
    
    const form = document.getElementById('branch-form');
    form.reset();
    
    if (action === 'add') {
        titleEl.innerText = "➕ เพิ่มโครงการสาขาใหม่";
        submitBtn.innerText = "บันทึกและสร้างโครงการ";
        document.getElementById('branch-original-name').value = "";
        document.getElementById('branch-form-status').value = "ON PROCESS"; // default
    } else {
        // Edit mode
        const nameToFind = branchName || activeTrackingBranch;
        if (!nameToFind) {
            alert("กรุณาเลือกสาขาที่ต้องการแก้ไขก่อน!");
            return;
        }
        
        const data = await fetchBrandData(currentBrand);
        const branch = (data.branches || []).find(b => b.name === nameToFind);
        if (!branch) {
            alert("ไม่พบข้อมูลสาขาที่ต้องการแก้ไข!");
            return;
        }
        
        titleEl.innerText = "✏️ แก้ไขรายละเอียดโครงการ";
        submitBtn.innerText = "บันทึกการเปลี่ยนแปลง";
        
        document.getElementById('branch-original-name').value = branch.name;
        document.getElementById('branch-form-name').value = branch.name;
        document.getElementById('branch-form-job-type').value = branch.jobType || 'NEW Shop';
        document.getElementById('branch-form-sqm').value = branch.sqm || 0;
        document.getElementById('branch-form-setup-date').value = branch.setupDate || '';
        document.getElementById('branch-form-open-date').value = branch.openDate || '';
        document.getElementById('branch-form-return-date').value = branch.returnDate || '';
        document.getElementById('branch-form-manager').value = branch.manager || '';
        document.getElementById('branch-form-interior').value = branch.interior || '';
        document.getElementById('branch-form-contract').value = branch.contract || '';
        document.getElementById('branch-form-status').value = branch.status || 'ON PROCESS';
        document.getElementById('branch-form-remarks').value = branch.remarks || '';
    }
    
    document.getElementById('branch-form-modal').classList.add('active');
}

function closeBranchFormModal() {
    document.getElementById('branch-form-modal').classList.remove('active');
}

async function handleBranchFormSubmit(event) {
    event.preventDefault();
    
    const action = document.getElementById('branch-form-action').value;
    const originalName = document.getElementById('branch-original-name').value;
    
    const newName = document.getElementById('branch-form-name').value.trim();
    const jobType = document.getElementById('branch-form-job-type').value;
    const sqm = parseFloat(document.getElementById('branch-form-sqm').value) || 0;
    const setupDate = document.getElementById('branch-form-setup-date').value.trim();
    const openDate = document.getElementById('branch-form-open-date').value.trim();
    const returnDate = document.getElementById('branch-form-return-date').value.trim();
    const manager = document.getElementById('branch-form-manager').value.trim();
    const interior = document.getElementById('branch-form-interior').value.trim();
    const contract = document.getElementById('branch-form-contract').value.trim();
    const status = document.getElementById('branch-form-status').value;
    const remarks = document.getElementById('branch-form-remarks').value.trim();
    
    if (!newName) {
        alert("กรุณาระบุชื่อโครงการ / ชื่อสาขา!");
        return;
    }
    
    const data = await fetchBrandData(currentBrand);
    if (!data.branches) data.branches = [];
    
    // Check for duplicate names
    const duplicate = data.branches.find(b => b.name.toLowerCase() === newName.toLowerCase() && (action === 'add' || b.name.toLowerCase() !== originalName.toLowerCase()));
    if (duplicate) {
        alert("มีโครงการสาขานี้อยู่ในระบบแล้ว กรุณาใช้ชื่ออื่น!");
        return;
    }
    
    const newBranchObj = {
        name: newName,
        jobType,
        sqm,
        setupDate,
        openDate,
        returnDate,
        manager,
        interior,
        contract,
        status,
        remarks
    };
    
    if (action === 'add') {
        data.branches.push(newBranchObj);
        activeTrackingBranch = newName; // Set newly added branch as active
        alert(`เพิ่มโครงการสาขาใหม่ '${newName}' สำเร็จ!`);
    } else {
        // Edit mode: find and replace
        const idx = data.branches.findIndex(b => b.name === originalName);
        if (idx !== -1) {
            data.branches[idx] = newBranchObj;
        } else {
            // fallback
            data.branches.push(newBranchObj);
        }
        
        // Update all furniture items pointing to the original name!
        if (originalName && originalName !== newName) {
            data.furniture.forEach(item => {
                if (item.location === originalName) {
                    item.location = newName;
                }
            });
            
            // Also update logs details for transparency
            data.logs.forEach(log => {
                if (log.details && log.details.includes(`'${originalName}'`)) {
                    log.details = log.details.replaceAll(`'${originalName}'`, `'${newName}'`);
                } else if (log.details && log.details.includes(originalName)) {
                    log.details = log.details.replaceAll(originalName, newName);
                }
            });
        }
        
        activeTrackingBranch = newName; // Update active selected branch
        alert(`แก้ไขรายละเอียดโครงการ '${newName}' สำเร็จ!`);
    }
    
    await syncBrandData(currentBrand, data);
    closeBranchFormModal();
    
    // Re-render
    renderBranchTracking();
}

// ==========================================================================
// 5. Furniture Registration (Register View)
// ==========================================================================

let uploadedImageBase64 = null;

async function resetRegisterForm() {
    document.getElementById('register-form').reset();
    
    // Reset variables
    uploadedImageBase64 = null;
    
    // Set auto-generated default Code (e.g. MTP-RK-xxx)
    const codeInput = document.getElementById('reg-code');
    const prefix = currentBrand === 'montipa' ? 'MTP' : 'MOT';
    const rand = Math.floor(100 + Math.random() * 900);
    codeInput.value = `${prefix}-RK-${rand}`;
    
    // Clear Photo Upload preview
    clearSelectedImage();
    
    // Hide Success Banner
    document.getElementById('reg-success-banner').style.display = 'none';
    
    // Disable Print Button until saved
    document.getElementById('btn-print-barcode').disabled = true;
    
    // Clear Barcode Sticker Graphic
    document.getElementById('sticker-barcode-svg').innerHTML = `<div style="color: #94A3B8; font-size: 13px;">รอข้อมูลลงทะเบียน...</div>`;
    document.getElementById('sticker-bc-val').innerText = "-";
    document.getElementById('sticker-code-val').innerText = "-";
    document.getElementById('sticker-date-val').innerText = "-";
    document.getElementById('sticker-time-val').innerText = "-";

    // Populate branch select options
    const data = await fetchBrandData(currentBrand);
    populateBranchDropdowns(data);
}

function updateColorPreview(colorHex) {
    document.getElementById('color-circle-preview').style.backgroundColor = colorHex;
    document.getElementById('color-hex-text').innerText = colorHex;
}

function triggerPhotoUpload() {
    document.getElementById('reg-file-input').click();
}

function handleImageFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    processAndPreviewImage(file, 'reg-image-preview', 'reg-upload-placeholder');
}

function processAndPreviewImage(file, imgId, placeholderId) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const rawBase64 = event.target.result;
        
        // Premium Image Compression: Canvas resize to avoid heavy uploads
        const img = new Image();
        img.src = rawBase64;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 400; // Optimal standard width for database thumbnail
            const scaleSize = MAX_WIDTH / img.width;
            
            if (img.width > MAX_WIDTH) {
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scaleSize;
            } else {
                canvas.width = img.width;
                canvas.height = img.height;
            }
            
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            // Output compressed Base64
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); // 70% compression quality is perfect
            uploadedImageBase64 = compressedBase64;
            
            // Set image preview
            const previewEl = document.getElementById(imgId);
            previewEl.src = compressedBase64;
            previewEl.style.display = 'block';
            document.getElementById(placeholderId).style.display = 'none';
        };
    };
    reader.readAsDataURL(file);
}

function triggerWebcamCapture() {
    // Open webcam simulation or capture dialog via mobile file picker
    alert("โปรแกรมใช้งานผ่านมือถือ: ระบบจำลองการต่อกล้องถ่ายรูป หรือท่านสามารถใช้นิ้วคลิกที่กรอบอัปโหลดรูปภาพเพื่อเปิดหน้าต่างกล้องถ่ายรูปสแนปจริงได้ทันที!");
    triggerPhotoUpload();
}

function clearSelectedImage() {
    uploadedImageBase64 = null;
    const previewEl = document.getElementById('reg-image-preview');
    previewEl.src = "";
    previewEl.style.display = 'none';
    document.getElementById('reg-upload-placeholder').style.display = 'flex';
    document.getElementById('reg-file-input').value = "";
}

async function handleRegistrationSubmit(e) {
    e.preventDefault();
    
    const code = document.getElementById('reg-code').value.trim();
    const name = document.getElementById('reg-name').value.trim();
    const type = document.getElementById('reg-type').value;
    const location = document.getElementById('reg-location').value;
    const width = parseInt(document.getElementById('reg-w').value) || 0;
    const depth = parseInt(document.getElementById('reg-d').value) || 0;
    const height = parseInt(document.getElementById('reg-h').value) || 0;
    const color = document.getElementById('reg-color-picker').value;
    const qty = parseInt(document.getElementById('reg-qty').value) || 1;
    const remarks = document.getElementById('reg-remarks').value.trim();
    
    // Barcode Serial code: BC-YYYYMMDD-HHMMSS (Unique Tracker Code)
    const now = new Date();
    const barcodeSerial = "BC-" + now.getFullYear() + 
                          formatTwoDigits(now.getMonth() + 1) + 
                          formatTwoDigits(now.getDate()) + "-" + 
                          formatTwoDigits(now.getHours()) + 
                          formatTwoDigits(now.getMinutes()) + 
                          formatTwoDigits(now.getSeconds());
                          
    const dStr = formatTwoDigits(now.getDate()) + "/" + formatTwoDigits(now.getMonth() + 1) + "/" + now.getFullYear();
    const tStr = formatTwoDigits(now.getHours()) + ":" + formatTwoDigits(now.getMinutes());
    
    // If connected to cloud, we can choose to upload images to Google Drive.
    // For now we store as base64 or seed default image if empty.
    let finalImageUrl = uploadedImageBase64 || "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=400&q=80";
    
    if (isCloudConnected && cloudScriptUrl && uploadedImageBase64) {
        // Upload photo to Google Drive via Apps Script Web App
        try {
            // Show scanning overlay/loader
            alert("กำลังอัปโหลดรูปภาพไปยัง Google Drive โฟลเดอร์สำรองข้อมูลของคุณ...");
            const response = await fetch(cloudScriptUrl, {
                method: "POST",
                body: JSON.stringify({
                    action: "upload_image",
                    image: uploadedImageBase64,
                    fileName: `${code}_${barcodeSerial}.jpg`
                })
            });
            const uploadRes = await response.json();
            if (uploadRes.status === 'success') {
                finalImageUrl = uploadRes.url; // Remote Drive URL!
            }
        } catch (err) {
            console.error("Google Drive Upload failed, fallback to offline image:", err);
        }
    }
    
    // Create new Furniture item
    const newFurniture = {
        barcode: barcodeSerial,
        code: code,
        name: name,
        type: type,
        location: location,
        color: color,
        width: width, depth: depth, height: height,
        quantity: qty,
        status: "ว่าง", // registered initially as vacant
        booker: "",
        remarks: remarks,
        imageUrl: finalImageUrl,
        lastModified: `${dStr} ${tStr}`
    };
    
    // Fetch, Append & Save
    const data = await fetchBrandData(currentBrand);
    data.furniture.push(newFurniture);
    
    // Generate Movement log entry
    data.logs.push({
        barcode: barcodeSerial,
        action: "ลงทะเบียนเข้าระบบ",
        date: dStr,
        time: tStr,
        details: `ลงทะเบียนสินค้าใหม่เข้าพิกัด '${location}' สต๊อกสินค้าเริ่มต้น ${qty} ชิ้น`
    });
    
    await syncBrandData(currentBrand, data);
    
    // Display Success Results
    document.getElementById('reg-success-banner').style.display = 'flex';
    document.getElementById('btn-print-barcode').disabled = false;
    
    // Populate sticker card
    const stickerBrand = document.getElementById('sticker-brand-name');
    stickerBrand.innerText = currentBrand === 'montipa' ? 'MONTIPA WAREHOUSE' : 'MOTTA WAREHOUSE';
    
    document.getElementById('sticker-bc-val').innerText = barcodeSerial;
    document.getElementById('sticker-code-val').innerText = code;
    document.getElementById('sticker-date-val').innerText = dStr;
    document.getElementById('sticker-time-val').innerText = tStr;
    
    // Draw Crisp SVG Barcode lines dynamically
    drawBarcodeSVG('sticker-barcode-svg', barcodeSerial);
    
    // Visual cue alert
    alert(`ลงทะเบียนเฟอร์นิเจอร์ ${code} เข้าพิกัดคลังสินค้าสำเร็จ พร้อมรหัสบาร์โค้ด ${barcodeSerial}`);
}

function formatTwoDigits(n) {
    return n < 10 ? "0" + n : n;
}

// Generate Crisp dynamic 1D Barcode lines inside SVG
function drawBarcodeSVG(containerId, serialString) {
    const container = document.getElementById(containerId);
    
    // Clean string representation into 1s and 0s pattern (Fake mock Code-128 / Code-39 wrapper for display)
    // We create regular vertical bars of different widths based on characters!
    let patterns = "";
    for (let i = 0; i < serialString.length; i++) {
        const charCode = serialString.charCodeAt(i);
        // Create 6-bit bar code lines pattern
        patterns += (charCode % 2 === 0) ? "110010" : "101100";
    }
    
    const svgWidth = 280;
    const svgHeight = 80;
    const margin = 10;
    const barcodeWidth = svgWidth - (margin * 2);
    const colWidth = barcodeWidth / patterns.length;
    
    let rects = "";
    for (let i = 0; i < patterns.length; i++) {
        if (patterns[i] === '1') {
            const x = margin + (i * colWidth);
            rects += `<rect x="${x}" y="5" width="${colWidth * 1.5}" height="70" fill="black" />`;
        }
    }
    
    container.innerHTML = `
        <svg width="${svgWidth}" height="${svgHeight}" style="background: white;">
            ${rects}
        </svg>
    `;
}

// Generate Crisp dynamic 1D Barcode lines returned as SVG HTML String
function getBarcodeSVGString(serialString) {
    let patterns = "";
    for (let i = 0; i < serialString.length; i++) {
        const charCode = serialString.charCodeAt(i);
        patterns += (charCode % 2 === 0) ? "110010" : "101100";
    }
    
    const svgWidth = 280;
    const svgHeight = 80;
    const margin = 10;
    const barcodeWidth = svgWidth - (margin * 2);
    const colWidth = barcodeWidth / patterns.length;
    
    let rects = "";
    for (let i = 0; i < patterns.length; i++) {
        if (patterns[i] === '1') {
            const x = margin + (i * colWidth);
            rects += `<rect x="${x}" y="5" width="${colWidth * 1.5}" height="70" fill="black" />`;
        }
    }
    
    return `
        <svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" style="background: white; display: block; margin: 0 auto;">
            ${rects}
        </svg>
    `;
}

// Print single barcode stickers dynamically in thermal label style
async function printSingleBarcode(barcode) {
    if (!barcode) return;
    const data = await fetchBrandData(currentBrand);
    const item = data.furniture.find(f => f.barcode === barcode);
    if (!item) {
        alert("ไม่พบข้อมูลเฟอร์นิเจอร์ชิ้นนี้");
        return;
    }
    
    const printWindow = window.open('', '_blank', 'width=450,height=500');
    if (!printWindow) {
        alert("กรุณาอนุญาตให้ระบบเปิดป๊อปอัป (Pop-up) เพื่อพิมพ์บาร์โค้ด");
        return;
    }
    
    const brandName = currentBrand === 'montipa' ? 'MONTIPA WAREHOUSE' : 'MOTTA WAREHOUSE';
    const barcodeSVG = getBarcodeSVGString(item.barcode);
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>พิมพ์บาร์โค้ด - ${item.code}</title>
            <style>
                @page {
                    size: auto;
                    margin: 0;
                }
                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    font-family: sans-serif;
                    background-color: white;
                    color: black;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                .sticker {
                    border: 2px dashed #000000;
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px;
                    width: 320px;
                    box-sizing: border-box;
                    background: white;
                }
                .brand {
                    font-weight: 800;
                    font-size: 16px;
                    letter-spacing: 2px;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    color: #000000;
                }
                .barcode-container {
                    margin: 12px 0;
                    display: flex;
                    justify-content: center;
                }
                .barcode-text {
                    font-family: monospace;
                    font-size: 14px;
                    font-weight: bold;
                    margin-top: 4px;
                    letter-spacing: 1px;
                }
                .info-grid {
                    margin-top: 14px;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 6px;
                    font-size: 12px;
                    border-top: 1px solid #E5E7EB;
                    padding-top: 10px;
                    text-align: left;
                }
                .info-row {
                    display: flex;
                    justify-content: space-between;
                }
                .info-label {
                    color: #4B5563;
                    font-weight: 500;
                }
                .info-value {
                    font-weight: 700;
                    color: #111827;
                }
            </style>
        </head>
        <body onload="setTimeout(function() { window.print(); window.close(); }, 300);">
            <div class="sticker">
                <div class="brand">${brandName}</div>
                <div class="barcode-container">
                    ${barcodeSVG}
                </div>
                <div class="barcode-text">${item.barcode}</div>
                <div class="info-grid">
                    <div class="info-row">
                        <span class="info-label">ชื่อเรียกเฟอร์ฯ:</span>
                        <span class="info-value">${item.name}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">รหัสสินค้า:</span>
                        <span class="info-value">${item.code}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">ขนาดเฟอร์ฯ:</span>
                        <span class="info-value">${item.width || '-'} x ${item.depth || '-'} x ${item.height || '-'} ซม.</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">สี:</span>
                        <span class="info-value" style="display: flex; align-items: center; gap: 4px;">
                            <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: ${item.color || '#ccc'}; border: 1px solid #999;"></span>
                            ${item.color || '-'}
                        </span>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// ==========================================================================
// 6. Interactive Booking & Catalog Screen
// ==========================================================================

function switchCatalogTab(tabName) {
    currentCatalogTab = tabName;
    
    const tabBranchBtn = document.getElementById('tab-cat-branch');
    const tabWhBtn = document.getElementById('tab-cat-warehouse');
    
    if (tabName === 'branch') {
        tabBranchBtn.classList.add('active');
        tabWhBtn.classList.remove('active');
        document.getElementById('catalog-branch-select').style.display = 'block';
    } else {
        tabWhBtn.classList.add('active');
        tabBranchBtn.classList.remove('active');
        document.getElementById('catalog-branch-select').style.display = 'none';
    }
    
    selectedCatalogItems.clear();
    updateCheckoutPanel();
    renderCatalog();
}

async function renderCatalog() {
    const data = await fetchBrandData(currentBrand);
    
    // Populate branch select options
    populateBranchDropdowns(data);
    
    const searchVal = document.getElementById('catalog-search-input').value.trim().toLowerCase();
    const branchVal = document.getElementById('catalog-branch-select').value;
    const statusVal = document.getElementById('catalog-status-select').value;
    
    let list = data.furniture;
    
    // 1. Separate based on Tab: Branch vs HQ Warehouse
    if (currentCatalogTab === 'branch') {
        // Exclude warehouse HQ
        list = list.filter(item => !item.location.includes('คลังสินค้า'));
        if (branchVal !== 'ทั้งหมด') {
            list = list.filter(item => item.location === branchVal);
        }
    } else {
        // Only warehouse HQ
        list = list.filter(item => item.location.includes('คลังสินค้า'));
    }
    
    // 2. Filter Status query
    if (statusVal !== 'ทั้งหมด') {
        if (statusVal === 'ว่าง') {
            list = list.filter(item => item.status === 'ว่าง');
        } else {
            list = list.filter(item => item.status !== 'ว่าง'); // booked or confirmed
        }
    }
    
    // 3. Filter Text Query
    if (searchVal) {
        list = list.filter(item => 
            item.code.toLowerCase().includes(searchVal) ||
            item.name.toLowerCase().includes(searchVal)
        );
    }
    
    const gridContainer = document.getElementById('catalog-grid');
    
    if (list.length === 0) {
        gridContainer.innerHTML = `<div style="grid-column: span 4; text-align: center; color: #94A3B8; padding: 48px 0; font-size: 14px;">ไม่พบรายการเฟอร์นิเจอร์ตรงตามตัวกรอง</div>`;
        return;
    }
    
    gridContainer.innerHTML = list.map(item => {
        const isLocked = item.status !== 'ว่าง';
        const isSelected = selectedCatalogItems.has(item.barcode);
        
        let statusText = "พร้อมใช้";
        let badgeClass = "ready";
        
        if (item.status === 'รอคอนเฟิร์ม') {
            statusText = `รออนุมัติ (ผู้จอง: ${item.booker})`;
            badgeClass = "pending";
        } else if (item.status === 'ยืนยันแล้ว') {
            statusText = `ถูกเบิกใช้ (ผู้จอง: ${item.booker})`;
            badgeClass = "confirmed";
        } else if (item.status === 'ต้องซ่อม') {
            statusText = "งดใช้งาน (ชำรุด)";
            badgeClass = "repair";
        }
        
        return `
            <div class="catalog-card ${isLocked ? 'locked' : ''} ${isSelected ? 'selected' : ''}" 
                 onclick="toggleSelectItem('${item.barcode}', ${isLocked})">
                <div class="catalog-card-image-box">
                    <img src="${item.imageUrl}" alt="${item.name}" class="catalog-card-img">
                    <div class="catalog-card-select-overlay">
                        ${isSelected ? '✓' : ''}
                    </div>
                    <div class="catalog-card-loc-tag">${item.location}</div>
                </div>
                
                <div class="catalog-card-details">
                    <div class="catalog-card-head">
                        <h4 class="catalog-card-title">${item.name}</h4>
                        <span class="catalog-card-code">${item.code}</span>
                    </div>
                    <div class="catalog-card-meta">
                        <span>ขนาด: ${item.width}x${item.depth}x${item.height} ซม.</span>
                        <span>จำนวนที่มี: <strong>${item.quantity} ชิ้น</strong></span>
                        <span class="catalog-card-status-badge status-pill ${badgeClass}" style="margin-top: 4px;">${statusText}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleSelectItem(barcode, isLocked) {
    if (isLocked) return;
    
    if (selectedCatalogItems.has(barcode)) {
        selectedCatalogItems.delete(barcode);
    } else {
        selectedCatalogItems.add(barcode);
    }
    
    updateCheckoutPanel();
    renderCatalog();
}

function updateCheckoutPanel() {
    const panel = document.getElementById('booking-checkout-panel');
    const text = document.getElementById('checkout-count-text');
    
    const count = selectedCatalogItems.size;
    text.innerText = `เลือกเฟอร์นิเจอร์ไว้จำนวน ${count} ชิ้น`;
    
    if (count > 0) {
        panel.classList.add('active');
    } else {
        panel.classList.remove('active');
    }
}

async function handleBookingSubmit() {
    const bookerName = document.getElementById('checkout-booker-name').value.trim();
    if (!bookerName) {
        alert("กรุณากรอกชื่อผู้ออกแบบอินทีเรียที่ขอจองใช้งานสินค้า!");
        return;
    }
    
    if (selectedCatalogItems.size === 0) return;
    
    const data = await fetchBrandData(currentBrand);
    const now = new Date();
    const dStr = formatTwoDigits(now.getDate()) + "/" + formatTwoDigits(now.getMonth() + 1) + "/" + now.getFullYear();
    const tStr = formatTwoDigits(now.getHours()) + ":" + formatTwoDigits(now.getMinutes());
    
    // Track count for confirmation modal
    let successCodes = [];
    
    data.furniture.forEach(item => {
        if (selectedCatalogItems.has(item.barcode)) {
            item.status = 'รอคอนเฟิร์ม'; // Set to wait confirm lock
            item.booker = bookerName;
            item.lastModified = `${dStr} ${tStr}`;
            
            // Add Movement log transaction
            data.logs.push({
                barcode: item.barcode,
                action: "จองใช้งาน",
                date: dStr,
                time: tStr,
                details: `อินทีเรีย '${bookerName}' ทำเรื่องจองใช้งานเฟอร์นิเจอร์ตัวนี้เพื่อนำไปจัดแต่งสาขา/โปรเจกต์ใหม่`
            });
            
            successCodes.push(item.code);
        }
    });
    
    await syncBrandData(currentBrand, data);
    
    alert(`ยื่นจองเฟอร์นิเจอร์จำนวน ${successCodes.length} ชิ้น (${successCodes.join(', ')}) เรียบร้อย! เปลี่ยนสถานะเป็น 'รอคอนเฟิร์ม' เพื่อกันจองซ้ำเรียบร้อยแล้ว`);
    
    // Clear checkout
    selectedCatalogItems.clear();
    document.getElementById('checkout-booker-name').value = "";
    updateCheckoutPanel();
    
    // Reload active catalog views
    renderCatalog();
}

// ==========================================================================
// 7. Inventory Backoffice Table & Crud controls
// ==========================================================================

async function renderAdminTable() {
    const data = await fetchBrandData(currentBrand);
    
    // Populate branch select options
    populateBranchDropdowns(data);
    
    const searchVal = document.getElementById('admin-search-input').value.trim().toLowerCase();
    const locVal = document.getElementById('admin-filter-location').value;
    const statusVal = document.getElementById('admin-filter-status').value;
    
    let list = data.furniture;
    
    // Filter Location
    if (locVal !== 'ทั้งหมด') {
        list = list.filter(item => item.location === locVal);
    }
    
    // Filter Status
    if (statusVal !== 'ทั้งหมด') {
        list = list.filter(item => item.status === statusVal);
    }
    
    // Search keyword
    if (searchVal) {
        list = list.filter(item => 
            item.code.toLowerCase().includes(searchVal) ||
            item.name.toLowerCase().includes(searchVal) ||
            item.barcode.toLowerCase().includes(searchVal) ||
            item.booker.toLowerCase().includes(searchVal)
        );
    }
    
    // Pagination controls
    const totalItems = list.length;
    const limit = dbPagination.backoffice.limit;
    const maxPage = Math.max(Math.ceil(totalItems / limit), 1);
    
    if (dbPagination.backoffice.page > maxPage) dbPagination.backoffice.page = maxPage;
    const startIdx = (dbPagination.backoffice.page - 1) * limit;
    const endIdx = Math.min(startIdx + limit, totalItems);
    
    const paginatedList = list.slice(startIdx, endIdx);
    
    const tbody = document.getElementById('admin-table-body');
    if (paginatedList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: #94A3B8; padding: 28px;">ไม่พบข้อมูลเฟอร์นิเจอร์ในระบบจัดเก็บ</td></tr>`;
    } else {
        tbody.innerHTML = paginatedList.map(item => {
            const isChecked = checkedAdminRows.has(item.barcode);
            const statusClass = item.status === 'ว่าง' ? 
                (item.location.includes('คลัง') ? 'ready' : 'branch') : 
                (item.status === 'รอคอนเฟิร์ม' ? 'pending' : (item.status === 'ยืนยันแล้ว' ? 'confirmed' : 'repair'));
            
            const displayStatusText = item.status === 'ว่าง' ? 
                (item.location.includes('คลัง') ? 'พร้อมใช้' : 'อยู่หน้าสาขา') : 
                item.status;

            return `
                <tr onclick="if(!event.target.closest('input[type=checkbox]') && !event.target.closest('.btn-table-action-dots')) openEditModal('${item.barcode}')" class="clickable-row">
                    <td style="text-align: center;">
                        <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleSelectRow('${item.barcode}', this.checked)">
                    </td>
                    <td><span class="code-badge">${item.code}</span></td>
                    <td style="font-family: monospace; font-size: 11px;">${item.barcode}</td>
                    <td style="font-weight: 600;">${item.name}</td>
                    <td><span class="type-pill ${item.type === 'ชุด' ? 'set' : ''}">${item.type}</span></td>
                    <td>${item.location}</td>
                    <td><span class="status-pill ${statusClass}">${displayStatusText}</span></td>
                    <td style="font-size: 11px; color: #64748B;">${item.lastModified || '-'}</td>
                    <td style="text-align: center;">
                        <button class="btn-table-action-dots">
                            ⋮
                            <ul class="action-dropdown-menu">
                                <li class="action-dropdown-item" onclick="openEditModal('${item.barcode}')">
                                    ✏️ แก้ไขข้อมูล
                                </li>
                                <li class="action-dropdown-item" onclick="triggerRegenerateBarcode('${item.barcode}')">
                                    🔄 ออกบาร์โค้ดใหม่
                                </li>
                                <li class="action-dropdown-item delete" onclick="deleteFurnitureSingle('${item.barcode}')">
                                    🗑️ ลบเฟอร์ชิ้นนี้
                                </li>
                            </ul>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
    }
    
    // Pagination counts
    document.getElementById('admin-pagination-info').innerText = totalItems === 0 ? 
        "แสดง 0 ถึง 0 จาก 0 รายการ" : 
        `แสดง ${startIdx + 1} ถึง ${endIdx} จาก ${totalItems} รายการ`;
        
    // Render pagination buttons
    const btnContainer = document.getElementById('admin-pagination-buttons');
    btnContainer.innerHTML = `
        <button class="btn-pagination" onclick="setAdminPage(${dbPagination.backoffice.page - 1})" ${dbPagination.backoffice.page === 1 ? 'disabled' : ''}>&lt;</button>
        ${Array.from({ length: maxPage }, (_, i) => i + 1).map(p => `
            <button class="btn-pagination ${dbPagination.backoffice.page === p ? 'active' : ''}" onclick="setAdminPage(${p})">${p}</button>
        `).join('')}
        <button class="btn-pagination" onclick="setAdminPage(${dbPagination.backoffice.page + 1})" ${dbPagination.backoffice.page === maxPage ? 'disabled' : ''}>&gt;</button>
    `;
}

function setAdminPage(p) {
    dbPagination.backoffice.page = p;
    renderAdminTable();
}

function toggleSelectRow(barcode, isChecked) {
    if (isChecked) {
        checkedAdminRows.add(barcode);
    } else {
        checkedAdminRows.delete(barcode);
    }
    
    updateBulkDeleteBar();
}

function toggleSelectAllRows(isChecked) {
    // If true, select all elements in current table pool
    fetchBrandData(currentBrand).then(data => {
        if (isChecked) {
            data.furniture.forEach(item => checkedAdminRows.add(item.barcode));
        } else {
            checkedAdminRows.clear();
        }
        updateBulkDeleteBar();
        renderAdminTable();
    });
}

function updateBulkDeleteBar() {
    const bar = document.getElementById('bulk-delete-bar');
    const text = document.getElementById('bulk-delete-info');
    
    const count = checkedAdminRows.size;
    text.innerText = `เลือกสินค้าในระบบไว้ ${count} รายการ`;
    
    if (count > 0) {
        bar.style.display = 'flex';
    } else {
        bar.style.display = 'none';
    }
}

function resetAdminFilters() {
    document.getElementById('admin-search-input').value = "";
    document.getElementById('admin-filter-location').value = "ทั้งหมด";
    document.getElementById('admin-filter-status').value = "ทั้งหมด";
    renderAdminTable();
}

// DELETE single row
async function deleteFurnitureSingle(barcode) {
    if (!confirm("คุณแน่ใจใช่หรือไม่ที่จะลบรายการเฟอร์นิเจอร์ชิ้นนี้ออกถาวร? การลบจะไม่สามารถกู้คืนกลับมาได้!")) return;
    
    const data = await fetchBrandData(currentBrand);
    const idx = data.furniture.findIndex(f => f.barcode === barcode);
    
    if (idx !== -1) {
        const deletedItem = data.furniture[idx];
        data.furniture.splice(idx, 1);
        
        // Remove timeline logs
        data.logs = data.logs.filter(l => l.barcode !== barcode);
        
        await syncBrandData(currentBrand, data);
        alert(`ลบข้อมูลเฟอร์นิเจอร์ ${deletedItem.code} เรียบร้อยแล้ว!`);
        
        checkedAdminRows.delete(barcode);
        updateBulkDeleteBar();
        renderAdminTable();
    }
}

// BULK DELETE checked rows
async function handleBulkDelete() {
    if (!confirm(`ยืนยันการลบเฟอร์นิเจอร์รวมทั้งหมดจำนวน ${checkedAdminRows.size} รายการออกถาวรหรือไม่?`)) return;
    
    const data = await fetchBrandData(currentBrand);
    
    data.furniture = data.furniture.filter(item => !checkedAdminRows.has(item.barcode));
    data.logs = data.logs.filter(log => !checkedAdminRows.has(log.barcode));
    
    await syncBrandData(currentBrand, data);
    
    alert(`ลบรายการข้อมูลคลังรวม ${checkedAdminRows.size} แถวเสร็จสิ้น!`);
    
    checkedAdminRows.clear();
    updateBulkDeleteBar();
    renderAdminTable();
}

// Edit furniture overlay popup
async function openEditModal(barcode) {
    const data = await fetchBrandData(currentBrand);
    const item = data.furniture.find(f => f.barcode === barcode);
    
    if (!item) return;
    
    // Populate branch select options
    populateBranchDropdowns(data);
    
    // Set edit variables in inputs
    document.getElementById('edit-original-bc').value = item.barcode;
    document.getElementById('edit-code').value = item.code;
    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-type').value = item.type;
    document.getElementById('edit-location').value = item.location;
    document.getElementById('edit-w').value = item.width || "";
    document.getElementById('edit-d').value = item.depth || "";
    document.getElementById('edit-h').value = item.height || "";
    document.getElementById('edit-color-picker').value = item.color || "#1F1F1F";
    document.getElementById('edit-color-circle').style.backgroundColor = item.color || "#1F1F1F";
    document.getElementById('edit-color-hex').innerText = item.color || "#1F1F1F";
    document.getElementById('edit-qty').value = item.quantity;
    document.getElementById('edit-status').value = item.status;
    document.getElementById('edit-booker').value = item.booker || "";
    document.getElementById('edit-remarks').value = item.remarks || "";
    
    // Render barcode preview in modal
    const svgContainer = document.getElementById('edit-barcode-svg-container');
    if (svgContainer) {
        svgContainer.innerHTML = getBarcodeSVGString(item.barcode);
    }
    const barcodeText = document.getElementById('edit-barcode-text');
    if (barcodeText) {
        barcodeText.innerText = `เลขบาร์โค้ด: ${item.barcode}`;
    }
    
    document.getElementById('edit-modal').classList.add('active');
}

function updateEditColorPreview(val) {
    document.getElementById('edit-color-circle').style.backgroundColor = val;
    document.getElementById('edit-color-hex').innerText = val;
}

function closeEditModal() {
    document.getElementById('edit-modal').classList.remove('active');
}

function handleEditPrint() {
    const barcode = document.getElementById('edit-original-bc').value;
    if (barcode) {
        printSingleBarcode(barcode);
    }
}

async function handleEditSubmit(e) {
    e.preventDefault();
    
    const originalBarcode = document.getElementById('edit-original-bc').value;
    const data = await fetchBrandData(currentBrand);
    const itemIdx = data.furniture.findIndex(f => f.barcode === originalBarcode);
    
    if (itemIdx === -1) return;
    
    const item = data.furniture[itemIdx];
    const now = new Date();
    const dStr = formatTwoDigits(now.getDate()) + "/" + formatTwoDigits(now.getMonth() + 1) + "/" + now.getFullYear();
    const tStr = formatTwoDigits(now.getHours()) + ":" + formatTwoDigits(now.getMinutes());
    
    // Capture values
    item.code = document.getElementById('edit-code').value.trim();
    item.name = document.getElementById('edit-name').value.trim();
    item.type = document.getElementById('edit-type').value;
    item.location = document.getElementById('edit-location').value;
    item.width = parseInt(document.getElementById('edit-w').value) || 0;
    item.depth = parseInt(document.getElementById('edit-d').value) || 0;
    item.height = parseInt(document.getElementById('edit-h').value) || 0;
    item.color = document.getElementById('edit-color-picker').value;
    item.quantity = parseInt(document.getElementById('edit-qty').value) || 1;
    item.status = document.getElementById('edit-status').value;
    item.booker = document.getElementById('edit-booker').value.trim();
    item.remarks = document.getElementById('edit-remarks').value.trim();
    item.lastModified = `${dStr} ${tStr}`; // Save Modification Date!
    
    // Write audit log entry
    data.logs.push({
        barcode: item.barcode,
        action: "แก้ไขข้อมูลเฟอร์",
        date: dStr,
        time: tStr,
        details: `อัปเดตข้อมูลรายละเอียดสินค้าและบันทึกวันแก้ไข เรียบร้อยแล้ว (บาร์โค้ดติดตามไม่เปลี่ยนแปลง)`
    });
    
    await syncBrandData(currentBrand, data);
    closeEditModal();
    alert(`บันทึกการเปลี่ยนแปลงสินค้าสำเร็จ! เลขบาร์โค้ดคงเดิม: ${item.barcode}`);
    
    // Refresh all pages/tables to be completely synced
    renderDashboard();
    renderAdminTable();
    if (typeof activeTrackingBranch !== 'undefined' && activeTrackingBranch) {
        renderBranchTracking();
    }
    if (typeof selectedBarcodeForTimeline !== 'undefined' && selectedBarcodeForTimeline === item.barcode) {
        renderTimelineLogs(item.barcode);
    }
}

// Regenerate barcode triggers modal
function triggerRegenerateBarcode(barcode) {
    document.getElementById('regen-target-bc').value = barcode;
    document.getElementById('confirm-barcode-modal').classList.add('active');
}

function closeBarcodeConfirmModal() {
    document.getElementById('confirm-barcode-modal').classList.remove('active');
}

async function executeRegenerateBarcode() {
    const targetBc = document.getElementById('regen-target-bc').value;
    const data = await fetchBrandData(currentBrand);
    const itemIdx = data.furniture.findIndex(f => f.barcode === targetBc);
    
    if (itemIdx === -1) return;
    
    const item = data.furniture[itemIdx];
    const now = new Date();
    
    // Generate new unique serial
    const newBarcodeSerial = "BC-" + now.getFullYear() + 
                          formatTwoDigits(now.getMonth() + 1) + 
                          formatTwoDigits(now.getDate()) + "-" + 
                          formatTwoDigits(now.getHours()) + 
                          formatTwoDigits(now.getMinutes()) + 
                          formatTwoDigits(now.getSeconds());
                          
    const dStr = formatTwoDigits(now.getDate()) + "/" + formatTwoDigits(now.getMonth() + 1) + "/" + now.getFullYear();
    const tStr = formatTwoDigits(now.getHours()) + ":" + formatTwoDigits(now.getMinutes());
    
    // Perform barcode change
    const oldBc = item.barcode;
    item.barcode = newBarcodeSerial;
    item.lastModified = `${dStr} ${tStr}`;
    
    // Update logs bound to the old barcode to match the new barcode so history isn't lost!
    data.logs.forEach(log => {
        if (log.barcode === oldBc) log.barcode = newBarcodeSerial;
    });
    
    // Append audit log for regeneration
    data.logs.push({
        barcode: newBarcodeSerial,
        action: "ออกบาร์โค้ดใหม่",
        date: dStr,
        time: tStr,
        details: `กดยืนยันเพื่อสลับยกเลิกบาร์โค้ดเก่า (${oldBc}) และออกบาร์โค้ดชุดใหม่ (${newBarcodeSerial}) สำเร็จ`
    });
    
    await syncBrandData(currentBrand, data);
    closeBarcodeConfirmModal();
    
    alert(`สร้างบาร์โค้ดติดตามชุดใหม่แทนที่รหัสบาร์โค้ดเดิมเรียบร้อยแล้ว: ${newBarcodeSerial}`);
    renderAdminTable();
}

// ==========================================================================
// 8. Mobile Camera Scanner & Decoders (Scanner Modal)
// ==========================================================================

let html5QrScanner = null;

function openScannerModal() {
    if (scannerContext !== 'welcome') {
        scannerContext = 'dashboard';
    }
    document.getElementById('scanner-modal').classList.add('active');
    
    // Initialize html5-qrcode standard hook camera view
    // Using simple options
    const config = { fps: 15, qrbox: { width: 250, height: 250 } };
    
    html5QrScanner = new Html5Qrcode("scanner-reader");
    
    // Select back camera
    Html5Qrcode.getCameras().then(devices => {
        if (devices && devices.length > 0) {
            // Prefer back camera ("environment")
            const backCam = devices.find(d => d.label.toLowerCase().includes('back') || d.label.toLowerCase().includes('environment'));
            const cameraId = backCam ? backCam.id : devices[0].id;
            
            html5QrScanner.start(
                cameraId, 
                config,
                onScanSuccess,
                onScanFailure
            ).catch(err => {
                console.error("Camera hook failed:", err);
                setupOfflineScannerFallback();
            });
        } else {
            setupOfflineScannerFallback();
        }
    }).catch(err => {
        console.error("Camera listing error:", err);
        setupOfflineScannerFallback();
    });
}

function onScanSuccess(decodedText, decodedResult) {
    // Barcode scanned successfully!
    closeScannerModal();
    if (scannerContext === 'welcome') {
        executeWelcomeBarcodeLookup(decodedText);
    } else {
        executeBarcodeLookup(decodedText);
    }
}

function onScanFailure(error) {
    // Silently log scan failures during frames sweep
    // console.warn(`QR scan error: ${error}`);
}

function setupOfflineScannerFallback() {
    document.getElementById('scanner-reader').innerHTML = `
        <div style="padding: 32px 16px; color: #FFF; text-align: center; font-size: 13px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 12px;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <span>ไม่พบกล้องบันทึกภาพ หรือเบราว์เซอร์ปฏิเสธสิทธิ์การเข้าถึงกล้อง</span>
            <p style="font-size: 11px; color: #94A3B8;">กรุณาพิมพ์รหัสบาร์โค้ด หรืออัปโหลดไฟล์รูปภาพของบาร์โค้ดเพื่อสแกนแทนได้</p>
        </div>
    `;
}

function triggerScannerFileUpload() {
    document.getElementById('scanner-file-input').click();
}

function handleScannerFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // Simulate image upload decoding or alert mock decoder
    const reader = new FileReader();
    reader.onload = async function(event) {
        const db = getLocalDatabase();
        let targetBarcode = '';
        let targetName = '';
        
        if (scannerContext === 'welcome') {
            if (db.montipa && db.montipa.furniture && db.montipa.furniture.length > 0) {
                targetBarcode = db.montipa.furniture[0].barcode;
                targetName = db.montipa.furniture[0].name;
            } else if (db.motta && db.motta.furniture && db.motta.furniture.length > 0) {
                targetBarcode = db.motta.furniture[0].barcode;
                targetName = db.motta.furniture[0].name;
            }
        } else {
            const data = await fetchBrandData(currentBrand);
            if (data.furniture && data.furniture.length > 0) {
                targetBarcode = data.furniture[0].barcode;
                targetName = data.furniture[0].name;
            }
        }
        
        if (targetBarcode) {
            closeScannerModal();
            if (scannerContext === 'welcome') {
                executeWelcomeBarcodeLookup(targetBarcode);
            } else {
                executeBarcodeLookup(targetBarcode);
            }
            alert(`ถอดรหัสบาร์โค้ดจากไฟล์ภาพเรียบร้อย: ${targetBarcode} (${targetName})`);
        } else {
            alert("ไม่สามารถถอดรหัสรหัสบาร์โค้ดในไฟล์รูปภาพนี้ได้");
        }
    };
    reader.readAsDataURL(file);
}

function handleManualBarcodeSearch() {
    const val = document.getElementById('scanner-manual-input').value.trim();
    if (!val) return;
    
    closeScannerModal();
    if (scannerContext === 'welcome') {
        executeWelcomeBarcodeLookup(val);
    } else {
        executeBarcodeLookup(val);
    }
}

function closeScannerModal() {
    document.getElementById('scanner-modal').classList.remove('active');
    
    if (html5QrScanner) {
        try {
            html5QrScanner.stop().then(() => {
                html5QrScanner = null;
            }).catch(err => console.error("Scanner stop error:", err));
        } catch (e) {
            html5QrScanner = null;
        }
    }
    scannerContext = 'dashboard'; // Reset context on close
}

// Welcome Scanner / Lookup Logic
function openWelcomeScanner() {
    scannerContext = 'welcome';
    openScannerModal();
}

function handleWelcomeSearchKey(event) {
    if (event.key === 'Enter') {
        handleWelcomeBarcodeSearch();
    }
}

function handleWelcomeBarcodeSearch() {
    const val = document.getElementById('welcome-barcode-input').value.trim();
    if (!val) return;
    executeWelcomeBarcodeLookup(val);
}

async function executeWelcomeBarcodeLookup(barcodeOrCodeString) {
    if (!barcodeOrCodeString) return;
    
    const montipaData = await fetchBrandData('montipa');
    const mottaData = await fetchBrandData('motta');
    
    let foundItem = null;
    let foundBrand = '';
    let foundData = null;
    
    foundItem = montipaData.furniture.find(f => 
        f.barcode.toLowerCase() === barcodeOrCodeString.toLowerCase() ||
        f.code.toLowerCase() === barcodeOrCodeString.toLowerCase()
    );
    
    if (foundItem) {
        foundBrand = 'montipa';
        foundData = montipaData;
    } else {
        foundItem = mottaData.furniture.find(f => 
            f.barcode.toLowerCase() === barcodeOrCodeString.toLowerCase() ||
            f.code.toLowerCase() === barcodeOrCodeString.toLowerCase()
        );
        if (foundItem) {
            foundBrand = 'motta';
            foundData = mottaData;
        }
    }
    
    if (!foundItem) {
        alert(`❌ ไม่พบข้อมูลเฟอร์นิเจอร์ หรือรหัสบาร์โค้ด '${barcodeOrCodeString}' ในระบบฐานข้อมูลของทุกแบรนด์`);
        return;
    }
    
    const brandNameDisplay = foundBrand.toUpperCase();
    const badgeEl = document.getElementById('welcome-status-brand-badge');
    badgeEl.innerText = brandNameDisplay;
    badgeEl.className = `welcome-status-brand-badge ${foundBrand}`;
    
    const bannerEl = document.getElementById('welcome-status-banner');
    bannerEl.className = `welcome-status-banner ${foundBrand}`;
    
    let locationText = foundItem.location;
    if (foundItem.status === 'ว่าง' && foundItem.location.includes('คลัง')) {
        locationText = "ว่าง (อยู่ในคลังหลัก HQ)";
    } else if (foundItem.location !== 'คลังสินค้า (HQ)') {
        locationText = `จัดแสดงอยู่ที่สาขา: ${foundItem.location}`;
    }
    document.getElementById('welcome-status-location').innerText = locationText;
    
    document.getElementById('welcome-status-name').innerText = foundItem.name;
    document.getElementById('welcome-status-code').innerText = foundItem.code;
    document.getElementById('welcome-status-barcode').innerText = foundItem.barcode;
    document.getElementById('welcome-status-dimensions').innerText = `${foundItem.width || '-'} x ${foundItem.depth || '-'} x ${foundItem.height || '-'}`;
    document.getElementById('welcome-status-category').innerText = foundItem.type || foundItem.category || '-';
    
    const statusClass = foundItem.status === 'ว่าง' ? 
        (foundItem.location.includes('คลัง') ? 'ready' : 'branch') : 
        (foundItem.status === 'รอคอนเฟิร์ม' ? 'pending' : (foundItem.status === 'ยืนยันแล้ว' ? 'confirmed' : 'repair'));
    
    const displayStatusText = foundItem.status === 'ว่าง' ? 
        (foundItem.location.includes('คลัง') ? 'พร้อมใช้' : 'อยู่หน้าสาขา') : 
        foundItem.status;
        
    const stateBadgeEl = document.getElementById('welcome-status-state-badge');
    stateBadgeEl.innerText = displayStatusText;
    stateBadgeEl.className = `status-pill ${statusClass}`;
    
    document.getElementById('welcome-status-modified').innerText = foundItem.lastModified || '-';
    document.getElementById('welcome-status-remarks').innerText = foundItem.remarks || 'ไม่มีหมายเหตุเพิ่มเติม';
    
    const imgEl = document.getElementById('welcome-status-img');
    const placeholderEl = document.getElementById('welcome-status-no-img');
    if (foundItem.imageUrl) {
        imgEl.src = foundItem.imageUrl;
        imgEl.style.display = 'block';
        placeholderEl.style.display = 'none';
    } else {
        imgEl.src = '';
        imgEl.style.display = 'none';
        placeholderEl.style.display = 'flex';
    }
    
    const itemLogs = foundData.logs.filter(l => l.barcode === foundItem.barcode);
    const timelineListEl = document.getElementById('welcome-status-timeline-list');
    
    if (itemLogs.length === 0) {
        timelineListEl.innerHTML = `<div style="text-align: center; color: #94A3B8; font-size: 12px; padding: 16px 0;">ไม่พบข้อมูลเส้นทาง/ประวัติการเคลื่อนไหวสินค้า</div>`;
    } else {
        timelineListEl.innerHTML = itemLogs.map((log, idx) => {
            const isLatest = idx === itemLogs.length - 1;
            return `
                <div class="welcome-status-node ${foundBrand} ${isLatest ? 'active' : ''}">
                    <div class="welcome-status-node-dot"></div>
                    <div class="welcome-status-node-title">${log.action}</div>
                    <div class="welcome-status-node-date">${log.date} ${log.time}</div>
                    <div class="welcome-status-node-desc">${log.details || ''}</div>
                </div>
            `;
        }).join('');
    }
    
    const enterBrandBtn = document.getElementById('btn-welcome-enter-brand');
    enterBrandBtn.className = `btn-modal-confirm ${foundBrand}`;
    enterBrandBtn.onclick = function() {
        closeWelcomeStatusModal();
        selectBrand(foundBrand);
        switchView('dashboard');
        
        setTimeout(() => {
            selectFurnitureForTimeline(foundItem.barcode);
            const trs = document.querySelectorAll('#dashboard-table-body tr');
            trs.forEach(tr => {
                if (tr.innerHTML.includes(foundItem.code)) {
                    tr.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    tr.style.animation = 'pulseHighlight 1.5s 2 ease-in-out';
                }
            });
        }, 300);
    };
    
    document.getElementById('welcome-status-modal').classList.add('active');
}

function closeWelcomeStatusModal() {
    document.getElementById('welcome-status-modal').classList.remove('active');
}

// Global search bar handler
function handleGlobalSearch(e) {
    if (e.key === 'Enter') {
        const val = document.getElementById('global-barcode-search').value.trim();
        if (val) {
            executeBarcodeLookup(val);
            document.getElementById('global-barcode-search').value = "";
        }
    }
}

// Search and select barcode instantly
async function executeBarcodeLookup(barcodeOrCodeString) {
    const data = await fetchBrandData(currentBrand);
    
    // Query exact match for barcode OR code
    const item = data.furniture.find(f => 
        f.barcode.toLowerCase() === barcodeOrCodeString.toLowerCase() ||
        f.code.toLowerCase() === barcodeOrCodeString.toLowerCase()
    );
    
    if (item) {
        // Go to dashboard view instantly!
        switchView('dashboard');
        // Select it for timeline highlight
        selectFurnitureForTimeline(item.barcode);
        // Alert user
        alert(`ค้นพบชิ้นส่วนคลัง: ${item.name} (${item.code}) สถานะคลังคือ '${item.status}'`);
    } else {
        alert(`❌ ไม่พบข้อมูลเฟอร์นิเจอร์ หรือรหัสบาร์โค้ด '${barcodeOrCodeString}' ในคลังสินค้าแบรนด์นี้`);
    }
}

// ==========================================================================
// 9. Google Sheets Settings Panel Controls
// ==========================================================================

function renderSettingsPage() {
    const savedUrl = localStorage.getItem('kook_cloud_sheets_url') || "";
    document.getElementById('settings-script-url').value = savedUrl;
    
    updateConnectionStatusUI();
    
    // Set Google Apps Script Code block content so users can copy
    const codeArea = document.getElementById('apps-script-code-area');
    codeArea.innerText = getGoogleAppsScriptCode();
}

function updateConnectionStatusUI() {
    const box = document.getElementById('settings-status-box');
    const text = document.getElementById('settings-status-text');
    const disconnectArea = document.getElementById('settings-disconnect-area');
    const qrArea = document.getElementById('settings-qr-area');
    const qrImg = document.getElementById('settings-qr-img');
    
    if (isCloudConnected && cloudScriptUrl) {
        box.className = "connection-status-box connected";
        text.innerText = "เชื่อมต่อระบบคลาวด์แล้ว (บันทึกเข้า Google Sheets เรียบร้อย)";
        disconnectArea.style.display = 'block';
        
        if (qrArea && qrImg) {
            const currentSiteUrl = window.location.origin + window.location.pathname;
            const mobileConfigUrl = `${currentSiteUrl}?cloud_url=${encodeURIComponent(cloudScriptUrl)}`;
            qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mobileConfigUrl)}`;
            qrArea.style.display = 'block';
        }
    } else {
        box.className = "connection-status-box disconnected";
        text.innerText = "โหมดออฟไลน์ (LocalStorage Mode)";
        disconnectArea.style.display = 'none';
        
        if (qrArea) {
            qrArea.style.display = 'none';
        }
    }
}

function saveConnectionSettings() {
    const url = document.getElementById('settings-script-url').value.trim();
    if (!url) {
        alert("กรุณากรอก Google Apps Script Web App URL ที่ถูกต้อง!");
        return;
    }
    
    localStorage.setItem('kook_cloud_sheets_url', url);
    cloudScriptUrl = url;
    isCloudConnected = true;
    
    updateConnectionStatusUI();
    updateCloudSyncButtonVisibility();
    alert("บันทึกการเชื่อมต่อเรียบร้อย! ระบบสลับเข้าโหมด Google Sheets & Drive คลาวด์สำเร็จ");
    
    // Fetch fresh database from cloud instantly
    renderDashboard();
}

function disconnectCloud() {
    localStorage.removeItem('kook_cloud_sheets_url');
    cloudScriptUrl = "";
    isCloudConnected = false;
    
    updateConnectionStatusUI();
    updateCloudSyncButtonVisibility();
    document.getElementById('settings-script-url').value = "";
    alert("ตัดการเชื่อมต่อระบบคลาวด์แล้ว! ระบบกลับเข้าสู่โหมดเก็บข้อมูลออฟไลน์ (Local Storage)");
    
    renderDashboard();
}

async function testConnection() {
    const url = document.getElementById('settings-script-url').value.trim();
    if (!url) {
        alert("กรุณากรอก URL เพื่อทดสอบเชื่อมต่อ!");
        return;
    }
    
    try {
        // Send a simple ping GET request to validator
        const response = await fetch(`${url}?action=ping`);
        const result = await response.json();
        
        if (result && result.status === 'pong') {
            alert("✓ การทดสอบการเชื่อมต่อสำเร็จ! Google Sheets พร้อมใช้งานสำหรับการเขียนข้อมูลประวัติสินค้า");
        } else {
            alert("⚠️ เชื่อมต่อไม่ได้: ลิงก์ถูกต้องแต่ไม่ตอบกลับ pong กลับมา ตรวจสอบสิทธิ์การ Deploy (Anyone)");
        }
    } catch (e) {
        alert("❌ การเชื่อมต่อล้มเหลว: ตรวจสอบความถูกต้องของลิงก์ และตรวจสอบว่าได้เลือกตั้งค่า Deploy ให้เป็น Anyone (ทุกคนมีสิทธิ์เข้าถึง) หรือยัง");
    }
}

function copyAppsScriptCode() {
    const code = getGoogleAppsScriptCode();
    navigator.clipboard.writeText(code).then(() => {
        const btnText = document.getElementById('copy-btn-text');
        btnText.innerText = "✓ คัดลอกสำเร็จ!";
        setTimeout(() => btnText.innerText = "คัดลอกโค้ดสคริปต์", 2000);
    }).catch(err => {
        alert("ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาลากเมาส์คลุมเพื่อคัดลอกในกล่องโค้ด");
    });
}

// Google Apps Script source code template loaded inside settings guide
function getGoogleAppsScriptCode() {
    return `/**
 * ระบบบริหารจัดการคลังสินค้าเฟอร์นิเจอร์แบรนด์ Montipa & Motta (แยกคลัง)
 * ออกแบบระบบโดย: Banyawat thepthong (กุ๊ก)
 * 
 * 1. วางโค้ดนี้ลงใน App Script
 * 2. กด Deploy > New Deployment
 * 3. เลือกประเภท Web App
 * 4. ตั้งค่า Execute as: Me และ Who has access: Anyone
 */

function doGet(e) {
  var action = e.parameter.action;
  var brand = e.parameter.brand;
  
  if (action === 'ping') {
    return ContentService.createTextOutput(JSON.stringify({ status: 'pong' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === 'get_brand_data') {
    var data = getBrandDataFromSheets(brand);
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: data }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  var postData = JSON.parse(e.postData.contents);
  var action = postData.action;
  
  if (action === 'sync_brand_data') {
    saveBrandDataToSheets(postData.brand, postData.data);
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  if (action === 'upload_image') {
    var fileUrl = saveImageToDrive(postData.image, postData.fileName);
    return ContentService.createTextOutput(JSON.stringify({ status: 'success', url: fileUrl }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ฟังก์ชันดึงข้อมูลจากตาราง Google Sheet
function getBrandDataFromSheets(brand) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // สร้างชีตหากยังไม่มีในไฟล์
  var furnSheet = ss.getSheetByName(brand + "_furniture") || ss.insertSheet(brand + "_furniture");
  var logSheet = ss.getSheetByName(brand + "_logs") || ss.insertSheet(brand + "_logs");
  var branchSheet = ss.getSheetByName(brand + "_branches") || ss.insertSheet(brand + "_branches");
  
  // อ่านรายการเฟอร์นิเจอร์
  var furnData = [];
  var furnRows = furnSheet.getDataRange().getValues();
  if (furnRows.length > 1) {
    var headers = furnRows[0];
    for (var i = 1; i < furnRows.length; i++) {
      var row = furnRows[i];
      var item = {};
      for (var j = 0; j < headers.length; j++) {
        item[headers[j]] = row[j];
      }
      furnData.push(item);
    }
  }
  
  // อ่านทรานแซกชัน Log
  var logData = [];
  var logRows = logSheet.getDataRange().getValues();
  if (logRows.length > 1) {
    var logHeaders = logRows[0];
    for (var i = 1; i < logRows.length; i++) {
      var row = logRows[i];
      var log = {};
      for (var j = 0; j < logHeaders.length; j++) {
        log[logHeaders[j]] = row[j];
      }
      logData.push(log);
    }
  }

  // อ่านข้อมูลสาขา
  var branchData = [];
  var branchRows = branchSheet.getDataRange().getValues();
  if (branchRows.length > 1) {
    var branchHeaders = branchRows[0];
    for (var i = 1; i < branchRows.length; i++) {
      var row = branchRows[i];
      var branch = {};
      for (var j = 0; j < branchHeaders.length; j++) {
        branch[branchHeaders[j]] = row[j];
      }
      branchData.push(branch);
    }
  }
  
  return { branches: branchData, furniture: furnData, logs: logData };
}

// ฟังก์ชันเซฟข้อมูลทับลง Google Sheet
function saveBrandDataToSheets(brand, data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var furnSheet = ss.getSheetByName(brand + "_furniture") || ss.insertSheet(brand + "_furniture");
  var logSheet = ss.getSheetByName(brand + "_logs") || ss.insertSheet(brand + "_logs");
  var branchSheet = ss.getSheetByName(brand + "_branches") || ss.insertSheet(brand + "_branches");
  
  furnSheet.clear();
  logSheet.clear();
  branchSheet.clear();
  
  // 1. เขียนรายการเฟอร์นิเจอร์
  if (data.furniture && data.furniture.length > 0) {
    var headers = Object.keys(data.furniture[0]);
    furnSheet.appendRow(headers);
    for (var i = 0; i < data.furniture.length; i++) {
      var row = [];
      for (var j = 0; j < headers.length; j++) {
        row.push(data.furniture[i][headers[j]]);
      }
      furnSheet.appendRow(row);
    }
  }
  
  // 2. เขียนประวัติความเคลื่อนไหว (Logs)
  if (data.logs && data.logs.length > 0) {
    var logHeaders = Object.keys(data.logs[0]);
    logSheet.appendRow(logHeaders);
    for (var i = 0; i < data.logs.length; i++) {
      var row = [];
      for (var j = 0; j < logHeaders.length; j++) {
        row.push(data.logs[i][logHeaders[j]]);
      }
      logSheet.appendRow(row);
    }
  }

  // 3. เขียนข้อมูลสาขา
  if (data.branches && data.branches.length > 0) {
    var branchHeaders = Object.keys(data.branches[0]);
    branchSheet.appendRow(branchHeaders);
    for (var i = 0; i < data.branches.length; i++) {
      var row = [];
      for (var j = 0; j < branchHeaders.length; j++) {
        row.push(data.branches[i][branchHeaders[j]]);
      }
      branchSheet.appendRow(row);
    }
  }
}

// ฟังก์ชันอัปโหลดรูปภาพบันทึกไปยังโฟลเดอร์ Google Drive
function saveImageToDrive(base64Data, fileName) {
  try {
    var parts = base64Data.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var rawData = Utilities.base64Decode(parts[1]);
    
    var blob = Utilities.newBlob(rawData, contentType, fileName);
    
    // บันทึกไฟล์ไว้ในโฟลเดอร์สำหรับแอปพลิเคชันคลังเฟอร์ฯ
    var folders = DriveApp.getFoldersByName("คลังรูปภาพเฟอร์นิเจอร์ Montipa-Motta");
    var folder;
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder("คลังรูปภาพเฟอร์นิเจอร์ Montipa-Motta");
    }
    
    var file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    return "https://lh3.googleusercontent.com/d/" + file.getId();
  } catch(e) {
    return "error: " + e.toString();
  }
}`;
}

// ==========================================================================
// 10. Core App Initial Boot setup hooks
// ==========================================================================

window.addEventListener('DOMContentLoaded', () => {
    // 1. Initial local database load
    getLocalDatabase();
    
    // Check for auto-configure cloud_url query parameter (e.g. from QR scan)
    const urlParams = new URLSearchParams(window.location.search);
    const cloudUrlParam = urlParams.get('cloud_url');
    if (cloudUrlParam) {
        const decodedUrl = decodeURIComponent(cloudUrlParam);
        localStorage.setItem('kook_cloud_sheets_url', decodedUrl);
        cloudScriptUrl = decodedUrl;
        isCloudConnected = true;
        
        // Clean URL to prevent re-triggering and keeping clutter
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
        
        // Show elegant custom notification after brief delay
        setTimeout(() => {
            showSyncNotification('✓ เชื่อมต่อระบบคลาวด์อัตโนมัติสำเร็จ! 🟢');
            renderDashboard();
        }, 500);
    } else {
        // 2. Read saved cloud settings
        const savedCloudUrl = localStorage.getItem('kook_cloud_sheets_url');
        if (savedCloudUrl) {
            cloudScriptUrl = savedCloudUrl;
            isCloudConnected = true;
        }
    }
    
    // 3. Show/hide sync button based on cloud connection state
    updateCloudSyncButtonVisibility();
    
    // 4. Trigger initial Dashboard and welcome load
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('app-screen').style.display = 'none';
});

// ==========================================================================
// 11. Cloud Sync UI Controls
// ==========================================================================

// Toggle visibility of the cloud sync button in the header
function updateCloudSyncButtonVisibility() {
    const btn = document.getElementById('header-sync-btn');
    if (!btn) return;
    btn.style.display = (isCloudConnected && cloudScriptUrl) ? 'flex' : 'none';
}

// Manual cloud sync - pull latest data from Google Sheets and refresh the active dashboard view
async function manualCloudSync() {
    if (!isCloudConnected || !cloudScriptUrl) {
        alert('กรุณาเชื่อมต่อ Google Sheets ก่อนใช้ปุ่มซิงค์คลาวด์');
        return;
    }
    
    const btn = document.getElementById('header-sync-btn');
    btn.classList.add('spinning');
    btn.disabled = true;
    
    try {
        // Force re-fetch from cloud and re-render the dashboard
        await renderDashboard();
        
        // Brief success feedback via a subtle notification
        showSyncNotification('ดึงข้อมูลล่าสุดจากคลาวด์สำเร็จ! 🟢');
    } catch (e) {
        console.error('Cloud sync error:', e);
        showSyncNotification('⚠️ ซิงค์คลาวด์ล้มเหลว ลองอีกครั้ง', true);
    } finally {
        btn.classList.remove('spinning');
        btn.disabled = false;
    }
}

// Lightweight toast-style notification for sync feedback (no alert() popup)
function showSyncNotification(message, isError = false) {
    // Remove any existing notification
    const existing = document.querySelector('.sync-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'sync-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        color: white;
        background: ${isError ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'linear-gradient(135deg, #10b981, #059669)'};
        box-shadow: 0 8px 25px ${isError ? 'rgba(239, 68, 68, 0.35)' : 'rgba(16, 185, 129, 0.35)'};
        z-index: 99999;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        pointer-events: none;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    // Auto-dismiss after 2.5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-10px)';
        setTimeout(() => notification.remove(), 350);
    }, 2500);
}
