/* ============ Icon set (uniform line-icon system) ============ */
const ICONS = {
  length: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="9" width="19" height="6" rx="1.2"/><line x1="6.5" y1="9" x2="6.5" y2="12.2"/><line x1="10.5" y1="9" x2="10.5" y2="13.4"/><line x1="14.5" y1="9" x2="14.5" y2="12.2"/><line x1="18.5" y1="9" x2="18.5" y2="13.4"/></svg>',
  weight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="4.2" cy="12" r="2.6"/><circle cx="19.8" cy="12" r="2.6"/><line x1="6.8" y1="12" x2="17.2" y2="12"/></svg>',
  temperature: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="9.7" y="3" width="4.6" height="12.5" rx="2.3"/><circle cx="12" cy="18" r="3.6"/></svg>',
  volume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M9.8 3v6.2L5.4 18a2 2 0 001.8 3h9.6a2 2 0 001.8-3l-4.4-8.8V3"/></svg>',
  area: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><line x1="3.5" y1="12" x2="20.5" y2="12"/><line x1="12" y1="3.5" x2="12" y2="20.5"/></svg>',
  time: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="7" x2="12" y2="12.3"/><line x1="12" y1="12.3" x2="15.5" y2="14.3"/></svg>',
  speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 16.5a8.5 8.5 0 0117 0"/><line x1="12" y1="16.5" x2="15.3" y2="11"/><circle cx="12" cy="16.5" r="1.1" fill="currentColor"/></svg>',
  data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.2" rx="8" ry="2.7"/><path d="M4 5.2v6c0 1.5 3.6 2.7 8 2.7s8-1.2 8-2.7v-6"/><path d="M4 11.2v6c0 1.5 3.6 2.7 8 2.7s8-1.2 8-2.7v-6"/></svg>',
  pressure: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17a8 8 0 0116 0"/><line x1="6.2" y1="17" x2="6.2" y2="14.8"/><line x1="17.8" y1="17" x2="17.8" y2="14.8"/><line x1="12" y1="17" x2="15" y2="11.6"/></svg>',
  energy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2.5L4.5 14h6l-1 7.5 9-11.5h-6z"/></svg>',
  power: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.5v5.3M15 2.5v5.3"/><path d="M6.7 7.8h10.6v3.7a5.3 5.3 0 01-10.6 0V7.8z"/><path d="M12 16.8v4.2"/></svg>',
  angle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5h16"/><path d="M4 19.5L17 6.2"/><path d="M4 19.5a13 13 0 0010-3.8"/></svg>',
};

/* ============ Unit data ============ */
const CATEGORIES = [
  { id:'length', label:'Length', rgb:'191,227,208', base:'meter', units:[
    {id:'m',name:'Meter',abbr:'m',factor:1},
    {id:'km',name:'Kilometer',abbr:'km',factor:1000},
    {id:'cm',name:'Centimeter',abbr:'cm',factor:0.01},
    {id:'mm',name:'Millimeter',abbr:'mm',factor:0.001},
    {id:'mi',name:'Mile',abbr:'mi',factor:1609.344},
    {id:'yd',name:'Yard',abbr:'yd',factor:0.9144},
    {id:'ft',name:'Foot',abbr:'ft',factor:0.3048},
    {id:'in',name:'Inch',abbr:'in',factor:0.0254},
    {id:'nmi',name:'Nautical Mile',abbr:'nmi',factor:1852},
  ]},
  { id:'weight', label:'Weight', rgb:'255,216,168', base:'kilogram', units:[
    {id:'kg',name:'Kilogram',abbr:'kg',factor:1},
    {id:'g',name:'Gram',abbr:'g',factor:0.001},
    {id:'mg',name:'Milligram',abbr:'mg',factor:0.000001},
    {id:'t',name:'Metric Ton',abbr:'t',factor:1000},
    {id:'lb',name:'Pound',abbr:'lb',factor:0.45359237},
    {id:'oz',name:'Ounce',abbr:'oz',factor:0.0283495231},
    {id:'st',name:'Stone',abbr:'st',factor:6.35029318},
    {id:'ust',name:'US Ton',abbr:'ton',factor:907.18474},
  ]},
  { id:'temperature', label:'Temperature', rgb:'247,184,194', isTemp:true, units:[
    {id:'c',name:'Celsius',abbr:'°C'},
    {id:'f',name:'Fahrenheit',abbr:'°F'},
    {id:'k',name:'Kelvin',abbr:'K'},
  ]},
  { id:'volume', label:'Volume', rgb:'169,216,240', base:'liter', units:[
    {id:'l',name:'Liter',abbr:'L',factor:1},
    {id:'ml',name:'Milliliter',abbr:'mL',factor:0.001},
    {id:'m3',name:'Cubic Meter',abbr:'m³',factor:1000},
    {id:'usgal',name:'US Gallon',abbr:'gal',factor:3.785411784},
    {id:'ukgal',name:'Imperial Gallon',abbr:'gal (UK)',factor:4.54609},
    {id:'qt',name:'US Quart',abbr:'qt',factor:0.946352946},
    {id:'pt',name:'US Pint',abbr:'pt',factor:0.473176473},
    {id:'cup',name:'US Cup',abbr:'cup',factor:0.2365882365},
    {id:'floz',name:'US Fluid Ounce',abbr:'fl oz',factor:0.0295735296},
    {id:'ft3',name:'Cubic Foot',abbr:'ft³',factor:28.316846592},
    {id:'in3',name:'Cubic Inch',abbr:'in³',factor:0.016387064},
  ]},
  { id:'area', label:'Area', rgb:'214,194,240', base:'sq meter', units:[
    {id:'m2',name:'Square Meter',abbr:'m²',factor:1},
    {id:'km2',name:'Square Kilometer',abbr:'km²',factor:1000000},
    {id:'cm2',name:'Square Centimeter',abbr:'cm²',factor:0.0001},
    {id:'ha',name:'Hectare',abbr:'ha',factor:10000},
    {id:'acre',name:'Acre',abbr:'ac',factor:4046.8564224},
    {id:'mi2',name:'Square Mile',abbr:'mi²',factor:2589988.110336},
    {id:'yd2',name:'Square Yard',abbr:'yd²',factor:0.83612736},
    {id:'ft2',name:'Square Foot',abbr:'ft²',factor:0.09290304},
    {id:'in2',name:'Square Inch',abbr:'in²',factor:0.00064516},
  ]},
  { id:'time', label:'Time', rgb:'252,230,153', base:'second', units:[
    {id:'ms',name:'Millisecond',abbr:'ms',factor:0.001},
    {id:'s',name:'Second',abbr:'s',factor:1},
    {id:'min',name:'Minute',abbr:'min',factor:60},
    {id:'h',name:'Hour',abbr:'hr',factor:3600},
    {id:'day',name:'Day',abbr:'day',factor:86400},
    {id:'week',name:'Week',abbr:'wk',factor:604800},
    {id:'month',name:'Month (avg)',abbr:'mo',factor:2629743.83},
    {id:'year',name:'Year',abbr:'yr',factor:31557600},
  ]},
  { id:'speed', label:'Speed', rgb:'200,230,160', base:'m/s', units:[
    {id:'mps',name:'Meters / sec',abbr:'m/s',factor:1},
    {id:'kph',name:'Kilometers / hour',abbr:'km/h',factor:0.2777778},
    {id:'mph',name:'Miles / hour',abbr:'mph',factor:0.44704},
    {id:'knot',name:'Knot',abbr:'kn',factor:0.5144444},
    {id:'fps',name:'Feet / sec',abbr:'ft/s',factor:0.3048},
  ]},
  { id:'data', label:'Digital Storage', rgb:'195,207,245', base:'byte', units:[
    {id:'bit',name:'Bit',abbr:'b',factor:0.125},
    {id:'byte',name:'Byte',abbr:'B',factor:1},
    {id:'kb',name:'Kilobyte',abbr:'KB',factor:1024},
    {id:'mb',name:'Megabyte',abbr:'MB',factor:1048576},
    {id:'gb',name:'Gigabyte',abbr:'GB',factor:1073741824},
    {id:'tb',name:'Terabyte',abbr:'TB',factor:1099511627776},
    {id:'pb',name:'Petabyte',abbr:'PB',factor:1125899906842624},
  ]},
  { id:'pressure', label:'Pressure', rgb:'242,198,221', base:'pascal', units:[
    {id:'pa',name:'Pascal',abbr:'Pa',factor:1},
    {id:'kpa',name:'Kilopascal',abbr:'kPa',factor:1000},
    {id:'bar',name:'Bar',abbr:'bar',factor:100000},
    {id:'atm',name:'Atmosphere',abbr:'atm',factor:101325},
    {id:'psi',name:'PSI',abbr:'psi',factor:6894.757293168},
    {id:'mmhg',name:'Millimeter of Mercury',abbr:'mmHg',factor:133.322387415},
  ]},
  { id:'energy', label:'Energy', rgb:'255,203,164', base:'joule', units:[
    {id:'j',name:'Joule',abbr:'J',factor:1},
    {id:'kj',name:'Kilojoule',abbr:'kJ',factor:1000},
    {id:'cal',name:'Calorie',abbr:'cal',factor:4.184},
    {id:'kcal',name:'Kilocalorie',abbr:'kcal',factor:4184},
    {id:'wh',name:'Watt-hour',abbr:'Wh',factor:3600},
    {id:'kwh',name:'Kilowatt-hour',abbr:'kWh',factor:3600000},
    {id:'btu',name:'BTU',abbr:'BTU',factor:1055.05585262},
  ]},
  { id:'power', label:'Power', rgb:'189,237,234', base:'watt', units:[
    {id:'w',name:'Watt',abbr:'W',factor:1},
    {id:'kw',name:'Kilowatt',abbr:'kW',factor:1000},
    {id:'mw',name:'Megawatt',abbr:'MW',factor:1000000},
    {id:'hp',name:'Horsepower',abbr:'hp',factor:745.69987158227},
    {id:'btuh',name:'BTU / hour',abbr:'BTU/h',factor:0.29307107},
  ]},
  { id:'angle', label:'Angle', rgb:'227,207,242', base:'degree', units:[
    {id:'deg',name:'Degree',abbr:'°',factor:1},
    {id:'rad',name:'Radian',abbr:'rad',factor:57.29577951308232},
    {id:'grad',name:'Gradian',abbr:'grad',factor:0.9},
    {id:'arcmin',name:'Arcminute',abbr:'arcmin',factor:0.0166667},
    {id:'arcsec',name:'Arcsecond',abbr:'arcsec',factor:0.000277778},
  ]},
];

const catById = id => CATEGORIES.find(c => c.id === id);

/* ============ Conversion logic ============ */
function toBase(cat, unitId, value){
  if(cat.isTemp){
    if(unitId==='c') return value;
    if(unitId==='f') return (value-32)*5/9;
    if(unitId==='k') return value-273.15;
  }
  const u = cat.units.find(u=>u.id===unitId);
  return value * u.factor;
}
function fromBase(cat, unitId, base){
  if(cat.isTemp){
    if(unitId==='c') return base;
    if(unitId==='f') return base*9/5+32;
    if(unitId==='k') return base+273.15;
  }
  const u = cat.units.find(u=>u.id===unitId);
  return base / u.factor;
}
function convert(cat, fromId, toId, value){
  return fromBase(cat, toId, toBase(cat, fromId, value));
}

function formatNumber(n){
  if(!isFinite(n)) return '—';
  if(n === 0) return '0';
  const abs = Math.abs(n);
  if(abs >= 1e9 || abs < 1e-6){
    return n.toExponential(4).replace(/\.?0+e/, 'e');
  }
  let decimals = abs >= 1000 ? 2 : (abs >= 1 ? 4 : 6);
  let s = n.toFixed(decimals);
  if(s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  let parts = s.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

/* ============ State ============ */
let state = { catId:'length', unitId:'m', value:'1' };

/* ============ Rendering ============ */
const tabsEl = document.getElementById('tabs');
const panelEl = document.getElementById('panel');
const valueInput = document.getElementById('valueInput');
const unitSelect = document.getElementById('unitSelect');
const resultsGrid = document.getElementById('resultsGrid');
const toastEl = document.getElementById('toast');

function renderTabs(){
  tabsEl.innerHTML = CATEGORIES.map(cat => `
    <button class="tab" role="tab" data-cat="${cat.id}" aria-selected="${cat.id===state.catId}">
      ${ICONS[cat.id]}<span>${cat.label}</span>
    </button>
  `).join('');
}

function renderUnitSelect(cat){
  unitSelect.innerHTML = cat.units.map(u =>
    `<option value="${u.id}" ${u.id===state.unitId?'selected':''}>${u.name} (${u.abbr})</option>`
  ).join('');
}

function renderResults(){
  const cat = catById(state.catId);
  panelEl.style.setProperty('--accent-rgb', cat.rgb);
  const raw = valueInput.value.trim();
  const value = parseFloat(raw);
  const valid = raw !== '' && !isNaN(value);

  resultsGrid.innerHTML = cat.units
    .filter(u => u.id !== state.unitId)
    .map(u => {
      const result = valid ? formatNumber(convert(cat, state.unitId, u.id, value)) : '—';
      return `
        <button class="result-card" data-unit="${u.id}" data-result="${result}" type="button">
          <span class="copy-flag">copy</span>
          <p class="result-name"><span>${u.name}</span><span class="abbr">${u.abbr}</span></p>
          <p class="result-value">${result}</p>
        </button>
      `;
    }).join('');
}

function renderAll(){
  renderTabs();
  const cat = catById(state.catId);
  renderUnitSelect(cat);
  valueInput.value = state.value;
  renderResults();
}

/* ============ Events ============ */
tabsEl.addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if(!btn) return;
  const cat = catById(btn.dataset.cat);
  state.catId = cat.id;
  state.unitId = cat.units[0].id;
  if(state.value === '' || isNaN(parseFloat(state.value))) state.value = '1';
  renderAll();
});

unitSelect.addEventListener('change', () => {
  state.unitId = unitSelect.value;
  renderResults();
});

valueInput.addEventListener('input', () => {
  state.value = valueInput.value;
  renderResults();
});

resultsGrid.addEventListener('click', e => {
  const card = e.target.closest('.result-card');
  if(!card) return;
  const result = card.dataset.result;

  if(result === '—'){ return; }

  state.unitId = card.dataset.unit;
  state.value = result.replace(/,/g, '');
  unitSelect.value = state.unitId;
  valueInput.value = state.value;
  renderResults();

  const valueField = document.querySelector('.value-field');
  valueField.classList.remove('pulse');
  requestAnimationFrame(() => {
    valueField.classList.add('pulse');
    setTimeout(()=>valueField.classList.remove('pulse'), 420);
  });
});

resultsGrid.addEventListener('dblclick', e => {
  const card = e.target.closest('.result-card');
  if(!card) return;
  const text = card.querySelector('.result-value').textContent;
  if(text === '—') return;
  navigator.clipboard?.writeText(text).then(()=>{
    toastEl.textContent = `Copied ${text}`;
    toastEl.classList.add('show');
    setTimeout(()=>toastEl.classList.remove('show'), 1400);
  });
});

renderAll();