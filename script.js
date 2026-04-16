// ── MAPBOX TOKEN ──
mapboxgl.accessToken = 'pk.eyJ1IjoibmV3Y2hhbmFwb3JuIiwiYSI6ImNtbmkydWo3NTA4b3MydHBzNG51cTljd24ifQ.YRBkXAWNP5oubXSSObk9XQ';

// ── SPOTS DATA ──
const spotsData = [
    {
        name: "Little Island",
        description: "An artificial public park island stands in Hudson river offering one of the best views of lower Manhattan. The park has many unique features that make it fun to walk and explore!",
        best_time: "Sunset",
        lat: 40.74215682,
        lng: -74.01025609,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298117/IMG_4134_giemoi.jpg"]
    },
    {
        name: "Pier 51 at Hudson River Park",
        description: "Want a better view than just standing on the crowded Little Island? A small park in front of Little Island with no metal structure to obstruct your lower Manhattan view. Watching sunset slowly turn to city lights here has been one of the best moments in NYC!",
        best_time: "Sunset",
        lat: 40.73833021,
        lng: -74.0108238,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298119/IMG_4331_jdhxxq.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298120/IMG_4373_ywtaoo.jpg"]
    },
    {
        name: "Strand Book Store",
        description: "One of the most iconic independent bookstores near Union Square. From used book shelves outside to a gigantic selection filling four floors — always inviting bookworms to explore what it means to be a New Yorker.",
        best_time: "Daytime",
        lat: 40.7334584,
        lng: -73.99104106,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298113/C7526D38-4D6E-43CE-8EC7-9B1CCEEFADCA_pigeuq.jpg"]
    },
    {
        name: "Cherry Hill",
        description: "As the name suggests, the best time to visit is during Spring when cherry blossoms bloom! The view of cherry blossoms alongside the iconic tower of The San Remo is one of the best spots to chill and enjoy the view.",
        best_time: "Daytime",
        lat: 40.77480555,
        lng: -73.97275255,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298126/IMG_5457_f2rdx1.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298126/IMG_5609_oxibol.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298126/IMG_5487_znqdvx.jpg"]
    },
    {
        name: "Bow Bridge",
        description: "This iconic bridge in the middle of Central Park offers the prettiest view in Fall. The winter walk is challenging — be careful crossing this bridge full of icy pathways!",
        best_time: "Daytime",
        lat: 40.77583379,
        lng: -73.97180471,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298132/IMG_7171_y2c6bu.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298133/IMG_7177_pjnttc.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298132/IMG_7175_xtfahd.jpg"]
    },
    {
        name: "Bethesda Fountain",
        description: "The fountain itself is a must-visit landmark in Central Park, but take a small walk to the pond nearby — especially in Fall. One of the most wonderful views for fall color palette in the city.",
        best_time: "Daytime",
        lat: 40.77436241,
        lng: -73.97086777,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298131/IMG_7161_ksm2mc.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298131/IMG_7154_qr7hun.jpg"]
    },
    {
        name: "New York Public Library",
        description: "The beautiful building that's also functional! Come in, study, and enjoy creative souvenirs perfect for bookworms. Study rooms are available by appointment — a worthwhile effort to appreciate old maps and beautiful architecture.",
        best_time: "Daytime",
        lat: 40.75322505,
        lng: -73.98223216,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298133/IMG_8913_tlzdet.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298130/IMG_5596_ck7kiq.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298116/IMG_3945_u994gy.jpg"]
    },
    {
        name: "Roosevelt Island",
        description: "A walk along the West side of the island is stunning during Spring — blooming cherry blossoms alongside midtown Manhattan. Cornell Tech campus is also innovative and fun to explore. The East side offers great Queens skyline views.",
        best_time: "Sunset",
        lat: 40.75528792,
        lng: -73.95678723,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298129/IMG_5821_nhyjzt.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298130/IMG_5850_xus5ho.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298131/IMG_5847_flxwbe.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298131/IMG_5801_numxjg.jpg"]
    },
    {
        name: "Hunter's Point South Park",
        description: "Another beautiful spot to appreciate the midtown skyline alongside cherry blossoms. The circular lawn invites kids to play, making the park lively and joyful.",
        best_time: "Sunset",
        lat: 40.74236516,
        lng: -73.96068996,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298122/IMG_4947_wtjcgq.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298123/IMG_4971_hvkkq0.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298124/IMG_5068_vsfhpz.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298123/IMG_4958_lqvwrp.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298124/IMG_5047_gnelyo.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298124/IMG_5099_bdpyri.jpg"]
    },
    {
        name: "Queens Public Library",
        description: "The park in front of the library is particularly stunning at sunset time. A quieter spot to enjoy the midtown view as the sky turns orange and the city lights up.",
        best_time: "Sunset",
        lat: 40.74551347,
        lng: -73.95872401,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298131/IMG_7052_a2ckfx.jpg"]
    },
    {
        name: "DUMBO — Manhattan Bridge View",
        description: "The view of the Manhattan Bridge framed through brick buildings is the most iconic spot in NYC. A must-visit for any first-time visitor.",
        best_time: "Sunset",
        lat: 40.70356322,
        lng: -73.9893763,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298121/IMG_4507_frylfn.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298123/IMG_4513_vmhprl.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298119/IMG_4302_tiqtlk.jpg"]
    },
    {
        name: "Harbor View Lawn",
        description: "The Harbor View Lawn at Brooklyn Bridge Park is a more local spot to enjoy the lower Manhattan skyline along the East River. Perfect for picnics and a nice day out.",
        best_time: "Sunset",
        lat: 40.70193786,
        lng: -73.99717248,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298122/IMG_4904_lakppl.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298123/IMG_4907_y1uouo.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298123/IMG_4906_bpp22s.jpg"]
    },
    {
        name: "Pell Street, Chinatown",
        description: "The most iconic Chinatown photospot in NYC — at Pell and Mott Street. Colorful lamps, bustling streets, and the amazing dim sum spot House of Joy make you feel transported to Asia.",
        best_time: "Daytime",
        lat: 40.71498527,
        lng: -73.99883307,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298111/IMG_2833_ao2iog.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298122/IMG_4469_kymxn5.jpg"]
    },
    {
        name: "The Noguchi Museum",
        description: "The collection of Japanese-American artist Isamu Noguchi, who defined himself as a New Yorker. From sculptures to playground ideas, the museum tells his life story through his art. The shop with Japanese paper lamps is a must-visit.",
        best_time: "Daytime",
        lat: 40.76697861,
        lng: -73.93807734,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298114/IMG_3113_a6t9fl.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298112/IMG_3109_wcoy03.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298112/IMG_3001_gw2gku.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298113/IMG_2993_a0ouir.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298113/IMG_3033_xwniau.jpg"]
    },
    {
        name: "Riverside Park",
        description: "The park next to the Hudson River offers an amazing place to watch the sunset. A more local spot to enjoy a velvety sky in quiet.",
        best_time: "Sunset",
        lat: 40.80186379,
        lng: -73.9719799,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298116/IMG_3755_uyrarm.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298116/IMG_3747_bfklf7.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298117/IMG_3746_asj2iq.jpg"]
    },
    {
        name: "Washington Square Park",
        description: "Featuring as the landmark of NYU campus, this public park embodies what New York City is — fun, lively, and exciting. The bustling environment draws artists, students, and visitors from all walks of life.",
        best_time: "Daytime",
        lat: 40.73164913,
        lng: -73.99715416,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298117/IMG_3927_pmp9zl.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298115/IMG_3565_funwru.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298133/IMG_9444_pkxj7r.jpg"]
    },
    {
        name: "Pier A Park (Hoboken)",
        description: "The best way to see the Manhattan skyline is from outside in. This pier in Hoboken offers one of the most amazing panoramic views of Manhattan — a hidden gem to appreciate the NYC skyline.",
        best_time: "Daytime",
        lat: 40.73782938,
        lng: -74.02651919,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298119/IMG_4277_mqk4yo.jpg"]
    },
    {
        name: "niconeco zakkaya",
        description: "The Japanese-style stationery store packs a lot of warmth and cuteness into one small space. A hidden gem for all the stationery and window shopping lovers.",
        best_time: "Daytime",
        lat: 40.72844426,
        lng: -73.98332536,
        photos: ["https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298124/IMG_5203_ugqpzs.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298125/IMG_5204_awkesz.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298125/IMG_5205_yk5tic.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298125/IMG_5206_hx6uje.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298125/IMG_5207_qapz4d.jpg", "https://res.cloudinary.com/dy47r8i8h/image/upload/q_auto/f_auto/v1776298126/IMG_5208_l1jmhr.jpg"]
    }
];

// ── CONSTANTS ──
const TIME_AT_SPOT = 45;
const TRAVEL_BETWEEN = 25;
const timeColors = {
    Daytime: '#7bb3d4',
    Sunset: '#c87c7c'
};

// ── SINGLE MAP INIT ──
const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/standard',
    zoom: 12.5,
    center: [-73.98, 40.745],
    bearing: 0,
    pitch: 10,
    config: {
        basemap: {
            showPlaceLabels: true,
            showPointOfInterestLabels: false,
            showRoadLabels: false,
            showTransitLabels: false,
            theme: "dawn"
        }
    }
});

map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');

// ── STATE ──
let activeFilter = 'All';
let markers = [];
let tripList = [];

// ── BUILD HEADER ──
const header = document.createElement('div');
header.className = 'header';
header.innerHTML = `
    <div class="header-tape"></div>
    <h1>New's NYC<br>Photo Diary 📷</h1>
    <div class="instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c87c7c" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#c87c7c" stroke="none"/></svg>
        @nnctshot
    </div>
    <div class="subtitle">click a pin to explore ✨<br>build your own itinerary below!</div>
`;
document.body.appendChild(header);

// ── BUILD FILTER BAR ──
const filterBar = document.createElement('div');
filterBar.className = 'filter-bar';
filterBar.innerHTML = `
    <button class="filter-btn active-all" data-filter="All">🗺 All spots</button>
    <button class="filter-btn" data-filter="Daytime">☀️ Daytime</button>
    <button class="filter-btn" data-filter="Sunset">🌅 Sunset</button>
`;
document.body.appendChild(filterBar);

filterBar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    filterBar.querySelectorAll('.filter-btn').forEach(b => { b.className = 'filter-btn'; });
    if (activeFilter === 'All') btn.classList.add('active-all');
    else if (activeFilter === 'Daytime') btn.classList.add('active-day');
    else btn.classList.add('active-sunset');
    updateMarkers();
});

// ── BUILD LEGEND ──
const legend = document.createElement('div');
legend.className = 'legend';
legend.innerHTML = `
    <h4>Best time to visit</h4>
    <div class="legend-item">
        <div class="legend-dot" style="background:${timeColors.Daytime}"></div>
        <span>Daytime</span>
    </div>
    <div class="legend-item">
        <div class="legend-dot" style="background:${timeColors.Sunset}"></div>
        <span>Sunset / Evening</span>
    </div>
`;
document.body.appendChild(legend);

// ── BUILD TRIP PLANNER ──
const plannerToggle = document.createElement('button');
plannerToggle.className = 'planner-toggle';
plannerToggle.innerHTML = `<span>🗓</span> My Trip Planner <span id="trip-count"></span>`;
document.body.appendChild(plannerToggle);

const plannerPanel = document.createElement('div');
plannerPanel.className = 'planner-panel';
plannerPanel.innerHTML = `
    <div class="planner-header">
        <span>Trip Planner ✏️</span>
        <button class="planner-clear" id="clear-trip">clear all</button>
    </div>
    <div class="planner-body" id="planner-body">
        <div class="planner-empty">No spots added yet~<br>Click a pin and tap "Add to trip" 📌</div>
    </div>
    <div class="planner-result" id="planner-result" style="display:none"></div>
`;
document.body.appendChild(plannerPanel);

plannerToggle.addEventListener('click', () => {
    plannerPanel.classList.toggle('open');
});

document.getElementById('clear-trip').addEventListener('click', () => {
    tripList = [];
    updatePlanner();
    updateAllPopupBtns();
});

// ── MARKERS ──
function createMarker(spot, idx) {
    const el = document.createElement('div');
    el.style.cssText = `
        width:16px; height:16px;
        border-radius:50%;
        background:${timeColors[spot.best_time]};
        border:2.5px solid rgba(255,255,255,0.9);
        box-shadow:0 2px 6px rgba(0,0,0,0.25);
        cursor:pointer;
        transition:transform 0.15s;
    `;
    el.addEventListener('mouseenter', () => el.style.transform = 'scale(1.4)');
    el.addEventListener('mouseleave', () => el.style.transform = 'scale(1)');

    const popup = new mapboxgl.Popup({ offset: 15, maxWidth: '300px', closeButton: true })
        .setHTML(buildPopupHTML(spot, idx));

    const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([spot.lng, spot.lat])
        .setPopup(popup)
        .addTo(map);

    marker.getPopup().on('open', () => {
        setTimeout(() => {
            const btn = document.getElementById(`add-btn-${idx}`);
            if (btn) {
                if (tripList.includes(idx)) {
                    btn.classList.add('added');
                    btn.textContent = '✓ Added';
                }
                btn.addEventListener('click', () => toggleTrip(idx, btn));
            }
        }, 50);
    });

    return marker;
}

function buildPopupHTML(spot, idx) {
    const badgeClass = spot.best_time === 'Daytime' ? 'day' : 'sunset';
    const badgeLabel = spot.best_time === 'Daytime' ? '☀️ Daytime' : '🌅 Sunset';
    const photosHTML = spot.photos && spot.photos.length
        ? `<div class="popup-photos">${spot.photos.map(p => `<img src="${p}" alt="photo" loading="lazy">`).join('')}</div>`
        : '';

    return `
        <div style="position:relative">
            <div class="popup-tape"></div>
            <div class="popup-inner">
                <div class="popup-header">
                    <span class="popup-time-badge ${badgeClass}">${badgeLabel}</span>
                </div>
                <div class="popup-title">${spot.name}</div>
                ${photosHTML}
                <div class="popup-desc">${spot.description}</div>
                <div class="popup-actions">
                    <button class="popup-add-btn" id="add-btn-${idx}">+ Add to trip</button>
                </div>
            </div>
        </div>
    `;
}

function updateMarkers() {
    markers.forEach(m => m.remove());
    markers = [];
    spotsData.forEach((spot, idx) => {
        if (activeFilter === 'All' || spot.best_time === activeFilter) {
            markers.push(createMarker(spot, idx));
        }
    });
}

function toggleTrip(idx, btn) {
    if (tripList.includes(idx)) {
        tripList = tripList.filter(i => i !== idx);
        btn.classList.remove('added');
        btn.textContent = '+ Add to trip';
    } else {
        tripList.push(idx);
        btn.classList.add('added');
        btn.textContent = '✓ Added';
    }
    updatePlanner();
    updateTripCount();
}

function updateAllPopupBtns() {
    spotsData.forEach((_, idx) => {
        const btn = document.getElementById(`add-btn-${idx}`);
        if (btn) {
            if (tripList.includes(idx)) {
                btn.classList.add('added');
                btn.textContent = '✓ Added';
            } else {
                btn.classList.remove('added');
                btn.textContent = '+ Add to trip';
            }
        }
    });
}

function updateTripCount() {
    const el = document.getElementById('trip-count');
    if (el) el.textContent = tripList.length > 0 ? `(${tripList.length})` : '';
}

function updatePlanner() {
    const body = document.getElementById('planner-body');
    const result = document.getElementById('planner-result');
    updateTripCount();

    if (tripList.length === 0) {
        body.innerHTML = `<div class="planner-empty">No spots added yet~<br>Click a pin and tap "Add to trip" 📌</div>`;
        result.style.display = 'none';
        return;
    }

    body.innerHTML = tripList.map(idx => {
        const spot = spotsData[idx];
        return `
            <div class="planner-spot">
                <span class="planner-spot-name">${spot.name}</span>
                <span class="planner-spot-time">${spot.best_time === 'Daytime' ? '☀️' : '🌅'}</span>
                <button class="planner-remove" onclick="removeFromTrip(${idx})">×</button>
            </div>
        `;
    }).join('');

    const totalSpots = tripList.length;
    const totalMins = totalSpots * TIME_AT_SPOT + (totalSpots - 1) * TRAVEL_BETWEEN;
    const hours = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    const timeStr = hours > 0 ? `${hours}h ${mins > 0 ? mins + 'min' : ''}` : `${mins}min`;

    result.style.display = 'block';
    result.innerHTML = `
        📍 <strong>${totalSpots}</strong> spot${totalSpots > 1 ? 's' : ''} selected<br>
        ⏱ Estimated time: <strong>${timeStr}</strong><br>
        <span style="font-size:12px;color:var(--ink-soft)">~${TIME_AT_SPOT} min/spot + ~${TRAVEL_BETWEEN} min travel between spots</span>
    `;
}

window.removeFromTrip = function (idx) {
    tripList = tripList.filter(i => i !== idx);
    updatePlanner();
    updateAllPopupBtns();
};

// ── INIT ──
map.on('load', () => {
    updateMarkers();
});