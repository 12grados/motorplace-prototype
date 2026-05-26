/* ============================================
   MOTORPLACE v3.0 — app.js
   Start-Up Chile CORFO · 2026
   ============================================ */

/* ---- DATA VEHÍCULOS ---- */
var CARS = {
  bmw: {
    id:'bmw', name:'BMW S1000 XR HP', price:'$11.630.000',
    meta:'2021 · 18.000 km · Providencia', ico:'🏍️',
    available:true, status:'available',
    tags:[{t:'KYC ✓',c:'dtag-g'},{t:'FEA',c:'dtag-b'},{t:'Escrow',c:'dtag-cy'},{t:'HP Pkg',c:'dtag-o'}],
    ficha:{
      marca:'BMW', modelo:'S1000 XR', anio:2021, km:'18.000',
      motor:'999cc 4cil', cv:207, color:'Blanco', vin:'WBS1H9C04M',
      descripcion:'Moto en excelente estado, HP Package completo. Escape Akrapovic titanio, suspensión DDC electrónica, Stage 1 ECU remap +12HP. Mantenciones al día en red BMW oficial.',
      fotos:['🏍️','⚙️','🔧','📸','🛞','📋'],
      detalles:{mantenciones:true,llaveRepuesto:true,accesorios:'Maletas laterales, intercomunicador Cardo',partePago:true,garantia:false}
    },
    horarios:['Lun-Vie 10:00-18:00','Sáb 10:00-14:00'],
    vendedor:{nombre:'Carlos M.',rating:4.8,ventas:3,kyc:true}
  },
  mercedes: {
    id:'mercedes', name:'Mercedes GLA 200 AMG', price:'$18.900.000',
    meta:'2022 · 32.000 km · Las Condes', ico:'🚗',
    available:true, status:'available',
    tags:[{t:'KYC ✓',c:'dtag-g'},{t:'Escrow',c:'dtag-cy'},{t:'Garantía',c:'dtag-b'}],
    ficha:{
      marca:'Mercedes-Benz', modelo:'GLA 200 AMG', anio:2022, km:'32.000',
      motor:'1.3T 4cil', cv:163, color:'Negro', vin:'W1N4N4GB8NJ',
      descripcion:'SUV compacto en impecable estado. Un solo dueño, todas las mantenciones en concesionario oficial. Garantía de fábrica vigente. Equipamiento AMG completo.',
      fotos:['🚗','🪑','🎛️','📸','🛞','📋'],
      detalles:{mantenciones:true,llaveRepuesto:true,accesorios:'Sunroof, cámara 360, asientos calefaccionados',partePago:false,garantia:true}
    },
    horarios:['Lun-Sáb 09:00-19:00'],
    vendedor:{nombre:'AutoPrime SpA',rating:4.9,ventas:47,kyc:true}
  },
  toyota: {
    id:'toyota', name:'Toyota Corolla Cross', price:'$14.500.000',
    meta:'2022 · 24.000 km · Ñuñoa', ico:'🚙',
    available:false, status:'unavailable',
    tags:[{t:'Sin Stock',c:'dtag-gr'},{t:'Avisar',c:'dtag-b'}],
    ficha:{
      marca:'Toyota', modelo:'Corolla Cross', anio:2022, km:'24.000',
      motor:'2.0 Híbrido', cv:122, color:'Plata', vin:'JTDKARFUXN3',
      descripcion:'Híbrido en excelente estado. Muy económico en combustible.',
      fotos:['🚙','🪑','🎛️','📸'],
      detalles:{mantenciones:true,llaveRepuesto:false,accesorios:'Cámara reversa, control crucero',partePago:true,garantia:false}
    },
    horarios:['Mar-Sáb 11:00-17:00'],
    vendedor:{nombre:'Pedro G.',rating:4.2,ventas:1,kyc:true}
  },
  suzuki: {
    id:'suzuki', name:'Suzuki GSX-S750', price:'$5.900.000',
    meta:'2020 · 12.000 km · Vitacura', ico:'🏍️',
    available:true, status:'reserved',
    tags:[{t:'KYC ✓',c:'dtag-g'},{t:'Crédito',c:'dtag-o'},{t:'Reservado',c:'dtag-y'}],
    ficha:{
      marca:'Suzuki', modelo:'GSX-S750', anio:2020, km:'12.000',
      motor:'749cc 4cil', cv:114, color:'Azul', vin:'JS1AGXXX',
      descripcion:'Naked deportiva en excelente estado. Ideal para ciudad y ruta.',
      fotos:['🏍️','⚙️','📸','🛞'],
      detalles:{mantenciones:true,llaveRepuesto:true,accesorios:'Portaequipaje, protecciones',partePago:true,garantia:false}
    },
    horarios:['Lun-Vie 14:00-19:00','Sáb 10:00-13:00'],
    vendedor:{nombre:'María T.',rating:5.0,ventas:2,kyc:true}
  },
  automotora: {
    id:'automotora', name:'AutoPrime SpA · SaaS', price:'12 pubs activas',
    meta:'Plan Profesional · Vitacura', ico:'🏢',
    available:true, status:'available',
    tags:[{t:'SaaS B2B',c:'dtag-o'},{t:'Verificado',c:'dtag-g'},{t:'VIP',c:'dtag-p'}],
    ficha:null,
    horarios:['Lun-Vie 09:00-19:00','Sáb 10:00-14:00'],
    vendedor:{nombre:'AutoPrime SpA',rating:4.9,ventas:47,kyc:true}
  }
};

/* ---- DATA SUBASTAS ---- */
var SUBASTAS = [
  {
    id:'s1', nombre:'Toyota Corolla Cross', anio:2020,
    km:'45.000', color:'Plata', motor:'2.0 Híbrido',
    ico:'🚙', zona:'Providencia',
    precioMinimo:9500000, precioActual:10300000, precioDirecta:12350000,
    horasTotal:6, horasRestantes:3, minutosRestantes:24,
    pujas:[
      {auto:'AutoPrime',monto:10300000,tiempo:'hace 5 min',winner:true},
      {auto:'MotorCenter',monto:10100000,tiempo:'hace 18 min',winner:false},
      {auto:'CarShop',monto:9900000,tiempo:'hace 34 min',winner:false},
      {auto:'AutoSur',monto:9700000,tiempo:'hace 51 min',winner:false}
    ],
    ficha:{multas:0,remates:0,prendas:0,propietarios:2}
  },
  {
    id:'s2', nombre:'Suzuki Swift Sport', anio:2019,
    km:'38.000', color:'Rojo', motor:'1.4T',
    ico:'🚗', zona:'Las Condes',
    precioMinimo:7200000, precioActual:7200000, precioDirecta:9360000,
    horasTotal:12, horasRestantes:10, minutosRestantes:45,
    pujas:[],
    ficha:{multas:0,remates:0,prendas:0,propietarios:1}
  }
];

/* ---- STATE ---- */
var STATE = {
  userType:null, isFirstTime:true, onboardSlide:0,
  expressUsed:{}, aiMsgIdx:0,
  mapScale:1, mapX:0, mapY:0,
  isDragging:false, dragStartX:0, dragStartY:0, dragMapX:0, dragMapY:0,
  activeChip:'all', currentCarId:null,
  subastaTiempo:6, subastaMinimo:0
};

var AI_REPLIES = [
  'Sin multas vigentes según el Registro Civil. ¿Quieres el informe Autofact completo?',
  'Puedo activar el proceso de Escrow ahora. ¿Lo iniciamos?',
  'Mantenciones al día en red oficial. ¿Coordinamos inspección técnica?',
  'La firma FEA tiene plena validez legal en Chile sin notaría física.',
  'Puedo simular crédito con convenios bancarios. ¿Cuántos meses prefieres?',
  'El proceso E2E cubre desde el acuerdo hasta el cambio de titular.',
  'Plata Hoy permite vender tu auto hoy mismo a automotoras verificadas. ¿Lo activamos?',
  'El precio está dentro del rango de mercado para este modelo y año.'
];

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var sp = document.getElementById('splash');
    sp.style.opacity = '0';
    setTimeout(function() {
      sp.style.display = 'none';
      if (STATE.isFirstTime) { showOnboarding(); }
      else { showLogin(); }
    }, 500);
  }, 2400);
});

/* ============================================
   ONBOARDING
   ============================================ */
var SLIDES = [
  { icon:'🗺️', title:'Encuentra tu <em>auto ideal</em>', desc:'Explora el mapa interactivo y encuentra vehículos cerca de ti. Filtra por precio, marca, comuna o tipo de informe disponible.' },
  { icon:'🔒', title:'Compra <em>100% segura</em>', desc:'Tu dinero queda protegido en nuestra Bóveda Escrow hasta confirmar cada etapa. Sin riesgos, sin estafas.' },
  { icon:'💰', title:'Vende <em>hoy mismo</em>', desc:'Con Plata Hoy activas una Subasta Express y automotoras verificadas pujan por tu auto en 6 o 12 horas. Dinero seguro el mismo día.' }
];

function showOnboarding() {
  var el = document.getElementById('onboarding');
  el.style.display = 'flex';
  renderSlide(0);
}

function renderSlide(idx) {
  STATE.onboardSlide = idx;
  var s = SLIDES[idx];
  var sw = document.getElementById('ob-slides-wrap');
  var dots = document.getElementById('ob-dots');
  var btn = document.getElementById('ob-next-btn');
  sw.innerHTML = '<div class="ob-slide"><div class="ob-icon">' + s.icon + '</div><div class="ob-title">' + s.title + '</div><p class="ob-desc">' + s.desc + '</p></div>';
  dots.innerHTML = '';
  for (var i = 0; i < SLIDES.length; i++) {
    var d = document.createElement('div');
    d.className = 'ob-dot' + (i === idx ? ' on' : '');
    (function(ii){ d.onclick = function(){ renderSlide(ii); }; })(i);
    dots.appendChild(d);
  }
  btn.textContent = idx < SLIDES.length - 1 ? 'Siguiente →' : 'Comenzar';
}

function obNext() {
  if (STATE.onboardSlide < SLIDES.length - 1) { renderSlide(STATE.onboardSlide + 1); }
  else { document.getElementById('onboarding').style.display = 'none'; STATE.isFirstTime = false; showLogin(); }
}
function obSkip() {
  document.getElementById('onboarding').style.display = 'none';
  STATE.isFirstTime = false; showLogin();
}

/* ============================================
   LOGIN
   ============================================ */
function showLogin() { document.getElementById('login').style.display = 'block'; switchLoginTab('login'); }

function switchLoginTab(tab) {
  document.getElementById('tab-login').classList.toggle('on', tab === 'login');
  document.getElementById('tab-register').classList.toggle('on', tab === 'register');
  document.getElementById('login-form').style.display   = tab === 'login'    ? 'block' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? 'block' : 'none';
}

function doLogin(type) {
  STATE.userType = type;
  document.getElementById('login').style.display = 'none';
  document.getElementById('mapScreen').style.display = 'block';
  initMap(); buildDrawer(); buildPerfil(); buildPublicar(); buildConvenios(); calcCredito();
}

function doLogout() {
  document.getElementById('mapScreen').style.display = 'none';
  document.getElementById('login').style.display = 'block';
  STATE.userType = null; STATE.expressUsed = {};
}

/* ============================================
   MAPA INTERACTIVO
   ============================================ */
function initMap() {
  var wrap = document.getElementById('mapWrap');
  if (!wrap) return;
  updateMapTransform();
  wrap.addEventListener('mousedown', startDrag);
  wrap.addEventListener('touchstart', startDragTouch, {passive:true});
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('touchmove', onDragTouch, {passive:true});
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
}

function startDrag(e) { STATE.isDragging=true; STATE.dragStartX=e.clientX; STATE.dragStartY=e.clientY; STATE.dragMapX=STATE.mapX; STATE.dragMapY=STATE.mapY; }
function startDragTouch(e) { if(!e.touches[0]) return; STATE.isDragging=true; STATE.dragStartX=e.touches[0].clientX; STATE.dragStartY=e.touches[0].clientY; STATE.dragMapX=STATE.mapX; STATE.dragMapY=STATE.mapY; }
function onDrag(e) { if(!STATE.isDragging) return; STATE.mapX=STATE.dragMapX+(e.clientX-STATE.dragStartX); STATE.mapY=STATE.dragMapY+(e.clientY-STATE.dragStartY); clampMap(); updateMapTransform(); }
function onDragTouch(e) { if(!STATE.isDragging||!e.touches[0]) return; STATE.mapX=STATE.dragMapX+(e.touches[0].clientX-STATE.dragStartX); STATE.mapY=STATE.dragMapY+(e.touches[0].clientY-STATE.dragStartY); clampMap(); updateMapTransform(); }
function endDrag() { STATE.isDragging=false; }
function clampMap() { var l=120*STATE.mapScale; STATE.mapX=Math.max(-l,Math.min(l,STATE.mapX)); STATE.mapY=Math.max(-l,Math.min(l,STATE.mapY)); }
function updateMapTransform() { var c=document.getElementById('mapCanvas'); if(c) c.style.transform='translate('+STATE.mapX+'px,'+STATE.mapY+'px) scale('+STATE.mapScale+')'; }
function zoomIn() { STATE.mapScale=Math.min(2.5,parseFloat((STATE.mapScale+0.2).toFixed(1))); updateMapTransform(); updateZoomLabel(); }
function zoomOut() { STATE.mapScale=Math.max(0.5,parseFloat((STATE.mapScale-0.2).toFixed(1))); updateMapTransform(); updateZoomLabel(); }
function updateZoomLabel() { var el=document.getElementById('zoom-label'); if(el) el.textContent=Math.round(STATE.mapScale*100)+'%'; }
function goToMyLocation() { STATE.mapX=0; STATE.mapY=0; STATE.mapScale=1; updateMapTransform(); updateZoomLabel(); showToast('📍 Ubicación actual centrada'); }

/* ============================================
   MAP CONTROLS
   ============================================ */
function setRadius(v) { document.getElementById('rval').textContent=v+' km'; document.getElementById('mapCount').textContent=Math.round(v*2.2); }

function toggleChip(id) {
  document.querySelectorAll('.mchip').forEach(function(c){c.classList.remove('on');});
  var el=document.getElementById('chip-'+id); if(el) el.classList.add('on');
  STATE.activeChip=id;
  var counts={all:18,premium:4,escrow:6,reservado:2,credito:11,ficha:7,stock:14,subasta:3};
  var labels={all:'Cercanos',premium:'Premium',escrow:'Con Escrow',reservado:'Reservados',credito:'Con Crédito',ficha:'Ficha Full',stock:'En Stock',subasta:'En Subasta'};
  document.getElementById('mapCount').textContent=counts[id]||18;
  document.getElementById('mapCountLabel').textContent=labels[id]||'Cercanos';
  hideDetail();
}

/* ============================================
   DETAIL CARD
   ============================================ */
function showDetail(id) {
  var car=CARS[id]; if(!car) return;
  STATE.currentCarId=id;
  document.getElementById('dc-name').textContent=car.name;
  document.getElementById('dc-price').textContent=car.price;
  document.getElementById('dc-meta').textContent=car.meta;
  document.getElementById('dc-ico').textContent=car.ico;
  var sMap={available:{label:'🟢 Disponible',cls:'available'},reserved:{label:'🟡 Reservado',cls:'reserved'},sold:{label:'🔴 Vendido',cls:'sold'},unavailable:{label:'⬛ Sin Stock',cls:'unavailable'}};
  var st=sMap[car.status]||sMap['available'];
  var stEl=document.getElementById('dc-status'); stEl.textContent=st.label; stEl.className='dc-status '+st.cls;
  var tagsHtml='';
  for(var i=0;i<car.tags.length;i++) tagsHtml+='<div class="dtag '+car.tags[i].c+'">'+car.tags[i].t+'</div>';
  document.getElementById('dc-tags').innerHTML=tagsHtml;
  var actEl=document.getElementById('dc-actions');
  if(!car.available) {
    actEl.innerHTML='<div class="unavail-msg">❌ Vehículo fuera de stock</div><div class="dc-btns"><button class="dcbtn dcbtn-out" onclick="quickMsg(\'Avisame cuando esté disponible\');openSheet(\'chat\')"><i class="fa-solid fa-bell"></i> Notificarme</button><button class="dcbtn dcbtn-out" onclick="openSheet(\'visita\')"><i class="fa-solid fa-eye"></i> Ver igual</button></div>';
  } else if(car.status==='reserved') {
    actEl.innerHTML='<div class="dc-btns"><button class="dcbtn dcbtn-out" onclick="openFicha(\''+id+'\')"><i class="fa-solid fa-file-lines"></i> Ficha</button><button class="dcbtn dcbtn-red" onclick="openSheet(\'chat\')"><i class="fa-solid fa-comments"></i> Chat</button><button class="dcbtn dcbtn-y" onclick="openSheet(\'visita\')"><i class="fa-solid fa-calendar"></i> Visitar</button></div>';
  } else {
    actEl.innerHTML='<div class="dc-btns"><button class="dcbtn dcbtn-g" onclick="openFicha(\''+id+'\')"><i class="fa-solid fa-file-lines"></i> Ficha</button><button class="dcbtn dcbtn-red" onclick="openSheet(\'chat\')"><i class="fa-solid fa-comments"></i> Chat</button><button class="dcbtn dcbtn-y" onclick="openSheet(\'reserva\')"><i class="fa-solid fa-lock"></i> Reservar</button><button class="dcbtn dcbtn-cy" onclick="openSheet(\'visita\')"><i class="fa-solid fa-calendar"></i> Visita</button></div>';
  }
  document.getElementById('detailCard').classList.remove('hidden');
}
function hideDetail() { document.getElementById('detailCard').classList.add('hidden'); }

/* ============================================
   FICHA TÉCNICA
   ============================================ */
function openFicha(id) {
  var car=CARS[id];
  if(!car||!car.ficha){ showToast('Ficha no disponible'); return; }
  var f=car.ficha; var v=car.vendedor; var isA=STATE.userType==='automotora';
  document.getElementById('ficha-title').textContent=f.marca+' '+f.modelo;
  var galHtml='<div class="photo-grid" style="margin-bottom:16px">';
  for(var i=0;i<f.fotos.length;i++) galHtml+='<div class="photo-slot filled" style="font-size:28px">'+f.fotos[i]+'</div>';
  galHtml+='</div>';
  var vendHtml='<div class="card" style="display:flex;align-items:center;gap:14px"><div style="width:48px;height:48px;border-radius:14px;background:var(--surf2);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">👤</div><div style="flex:1"><div style="font-size:14px;font-weight:700">'+v.nombre+'</div><div style="font-size:11px;color:var(--gray)">⭐ '+v.rating+' · '+v.ventas+' ventas · KYC ✓</div></div><button class="dcbtn dcbtn-red" style="width:auto;padding:8px 14px" onclick="openSheet(\'chat\')">Chat</button></div>';
  var detHtml='<div class="card" style="background:rgba(59,130,246,.05);border-color:rgba(59,130,246,.15)"><div class="sec-ttl" style="margin-bottom:8px">📝 Descripción del Vendedor</div><p style="font-size:13px;color:var(--gray);line-height:1.7">'+f.descripcion+'</p></div><div class="card"><div class="sec-ttl" style="margin-bottom:10px">✅ Detalles</div><div class="f-row"><span>Mantenciones al día</span><span class="f-val">'+(f.detalles.mantenciones?'✅ Sí':'❌ No')+'</span></div><div class="f-row"><span>Llave de repuesto</span><span class="f-val">'+(f.detalles.llaveRepuesto?'✅ Sí':'❌ No')+'</span></div><div class="f-row"><span>Accesorios</span><span class="f-val" style="font-size:11px;text-align:right;max-width:60%">'+f.detalles.accesorios+'</span></div><div class="f-row"><span>Acepta parte de pago</span><span class="f-val">'+(f.detalles.partePago?'✅ Sí':'❌ No')+'</span></div><div class="f-row"><span>Garantía</span><span class="f-val">'+(f.detalles.garantia?'✅ Vigente':'❌ No')+'</span></div></div>';
  var datosHtml='<div class="card"><div class="sec-ttl" style="margin-bottom:10px">🔧 Datos Técnicos</div><div class="f-row"><span>Marca</span><span class="f-val">'+f.marca+'</span></div><div class="f-row"><span>Modelo</span><span class="f-val">'+f.modelo+'</span></div><div class="f-row"><span>Año</span><span class="f-val">'+f.anio+'</span></div><div class="f-row"><span>Kilometraje</span><span class="f-val">'+f.km+' km</span></div><div class="f-row"><span>Motor</span><span class="f-val">'+f.motor+'</span></div><div class="f-row"><span>Potencia</span><span class="f-val">'+f.cv+' CV</span></div><div class="f-row"><span>Color</span><span class="f-val">'+f.color+'</span></div><div class="f-row"><span>VIN parcial</span><span class="f-val">'+f.vin+'***</span></div></div>';
  var expressFree=!STATE.expressUsed[id]||isA;
  var expressTxt=expressFree?'Escáner Express (Gratis)':'Escáner Express ($500)';
  var autofactTxt=isA?'Autofact Oficial (VIP sin costo)':'Autofact Oficial ($7.000)';
  var informesHtml='<div class="sec-ttl">🔍 Nivel Express</div><p style="font-size:12px;color:var(--gray);margin-bottom:12px">Multas Registro Civil + Remates AACH/PatentesChile. Primera consulta gratis, siguientes $500.</p><div id="express-result"></div><button class="scan-btn scan-express" onclick="runExpress(\''+id+'\')"><i class="fa-solid fa-magnifying-glass-chart"></i> '+expressTxt+'</button><div class="sec-ttl">🟣 Nivel Full · Autofact Oficial</div><p style="font-size:12px;color:var(--gray);margin-bottom:12px">Prendas, Embargos, Prohibiciones, Historial propietarios.'+(isA?' <strong style="color:var(--purple)">VIP incluido en tu plan.</strong>':'')+'</p><div id="autofact-result"></div><button class="scan-btn scan-autofact" onclick="runAutofact(\''+id+'\')"><i class="fa-solid fa-shield-halved"></i> '+autofactTxt+'</button>';
  var accionesHtml='<div style="display:flex;gap:10px;margin-top:8px"><button class="btn btn-yellow" style="margin-bottom:0" onclick="openSheet(\'reserva\')">🔒 Reservar Vehículo</button><button class="btn btn-blue" style="margin-bottom:0" onclick="openSheet(\'visita\')">📅 Solicitar Visita</button></div><button class="btn btn-ghost" style="margin-top:10px" onclick="openSheet(\'transferencia\')">🔄 Ver Seguimiento E2E</button>';
  document.getElementById('ficha-body').innerHTML=galHtml+vendHtml+detHtml+datosHtml+informesHtml+accionesHtml;
  openSheet('ficha');
}

function runExpress(id) {
  var isA=STATE.userType==='automotora';
  var isFree=!STATE.expressUsed[id]||isA;
  if(!isFree&&!confirm('Esta consulta tiene un costo de $500. ¿Continuar?')) return;
  if(!isA) STATE.expressUsed[id]=true;
  var el=document.getElementById('express-result');
  if(el) el.innerHTML='<div class="scan-res res-ok"><strong>✅ Escáner Express completado</strong><br>🚫 Multas vigentes: <strong>0</strong> (Registro Civil)<br>📦 Remates: <strong>Sin registros</strong> (AACH/PatentesChile)<br><span style="font-size:10px;color:rgba(34,197,94,.6)">Consulta: '+new Date().toLocaleTimeString()+' · '+(isFree?'$0':'$500')+' cobrado</span></div>';
}

function runAutofact(id) {
  var isA=STATE.userType==='automotora';
  if(!isA&&!confirm('Esta consulta tiene un costo de $7.000. ¿Continuar?')) return;
  var el=document.getElementById('autofact-result');
  if(el) el.innerHTML='<div class="scan-res res-full"><strong>🟣 Autofact Oficial · Reporte Completo</strong><br>⚖️ Prendas: <strong>0</strong><br>🔒 Embargos: <strong>0</strong><br>🚫 Prohibiciones: <strong>Sin registros</strong><br>👥 Propietarios anteriores: <strong>2</strong><br>🛡 Estado: <strong>LIMPIO – Apto para transferencia</strong><br><span style="font-size:10px;color:rgba(139,92,246,.6)">'+(isA?'VIP sin cargo':'$7.000 cobrado')+' · '+new Date().toLocaleDateString()+'</span></div>';
}

/* ============================================
   CONSULTA POR PATENTE
   ============================================ */
function consultarPatente() {
  var val=((document.getElementById('patente-inp')||{}).value||'').toUpperCase().trim();
  if(val.length<4){ showToast('Ingresa una patente válida'); return; }
  var el=document.getElementById('patente-result');
  el.innerHTML='<div class="scan-res res-basic"><strong>📋 Resultado básico gratuito — PatentesChile</strong><br>🚗 Tipo: <strong>Automóvil / Particular</strong><br>📅 Año: <strong>2019</strong><br>🏷 Marca: <strong>Toyota</strong><br>🌎 Región: <strong>Metropolitana</strong><br>⚡ Estado: <strong>Inscrito al día</strong><br><span style="font-size:10px;color:rgba(59,130,246,.6)">Fuente: PatentesChile · Gratuito</span></div><button class="scan-btn scan-express" onclick="runExpressPatente()"><i class="fa-solid fa-magnifying-glass-chart"></i> Informe Express ($500)</button><button class="scan-btn scan-autofact" onclick="runAutofactPatente()"><i class="fa-solid fa-shield-halved"></i> Autofact Oficial ($7.000)</button>';
}

function runExpressPatente() {
  if(!confirm('Esta consulta tiene un costo de $500. ¿Continuar?')) return;
  var el=document.getElementById('patente-result');
  el.innerHTML='<div class="scan-res res-ok"><strong>✅ Informe Express completado</strong><br>🚫 Multas vigentes: <strong>0</strong><br>📦 Remates: <strong>Sin registros</strong><br>📅 Permiso circulación: <strong>Vigente 2026</strong><br>🔧 Revisión técnica: <strong>Vigente</strong><br><span style="font-size:10px;color:rgba(34,197,94,.6)">$500 cobrado · '+new Date().toLocaleDateString()+'</span></div><button class="scan-btn scan-autofact" onclick="runAutofactPatente()"><i class="fa-solid fa-shield-halved"></i> Subir a Autofact Oficial ($7.000)</button>';
}

function runAutofactPatente() {
  if(!confirm('Esta consulta tiene un costo de $7.000. ¿Continuar?')) return;
  var el=document.getElementById('patente-result');
  el.innerHTML='<div class="scan-res res-full"><strong>🟣 Autofact Oficial · Reporte Completo</strong><br>⚖️ Prendas: <strong>0</strong><br>🔒 Embargos: <strong>0</strong><br>🚫 Prohibiciones: <strong>Sin registros</strong><br>👥 Propietarios: <strong>3</strong><br>🛡 Estado: <strong>LIMPIO</strong><br><span style="font-size:10px;color:rgba(139,92,246,.6)">$7.000 cobrado · Guardado en tu perfil</span></div>';
}

/* ============================================
   SISTEMA DE VISITAS
   ============================================ */
function solicitarVisita() {
  var car=CARS[STATE.currentCarId];
  if(!car){ document.getElementById('visita-body').innerHTML='<div class="card"><p style="color:var(--gray);text-align:center">Selecciona un vehículo en el mapa primero.</p></div>'; return; }
  var horarios=car.horarios||['Lun-Vie 10:00-18:00'];
  var horariosHtml='';
  for(var i=0;i<horarios.length;i++) {
    var h=horarios[i];
    horariosHtml+='<div class="visit-card" style="cursor:pointer;border-color:rgba(6,182,212,.2);margin-bottom:10px" onclick="confirmarVisita(\''+h+'\')"><div class="visit-time">'+h+'</div><div style="font-size:12px;color:var(--gray);margin-top:4px">Toca para solicitar este horario</div></div>';
  }
  document.getElementById('visita-body').innerHTML='<div class="card" style="background:rgba(6,182,212,.05);border-color:rgba(6,182,212,.2);text-align:center;padding:20px;margin-bottom:16px"><div style="font-size:40px;margin-bottom:8px">📅</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:20px;letter-spacing:1px">'+car.name+'</div><div style="font-size:12px;color:var(--gray);margin-top:4px">'+car.meta+'</div></div><div class="sec-ttl">Horarios disponibles</div>'+horariosHtml+'<div class="card"><div class="inp-g"><div class="inp-lbl">Proponer otro horario</div><input class="inp" placeholder="ej: Sábado 15:00"></div><div class="inp-g"><div class="inp-lbl">Mensaje al vendedor (opcional)</div><input class="inp" placeholder="ej: ¿Puede mostrar el motor?"></div><button class="btn btn-cyan" onclick="confirmarVisita(\'personalizado\')">📤 Enviar solicitud</button></div>';
}

function confirmarVisita(horario) {
  document.getElementById('visita-body').innerHTML='<div class="card" style="background:rgba(34,197,94,.07);border-color:rgba(34,197,94,.2);text-align:center;padding:28px"><div style="font-size:56px;margin-bottom:12px">✅</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:24px;letter-spacing:1px;margin-bottom:8px">¡Solicitud Enviada!</div><div style="font-size:13px;color:var(--gray);line-height:1.7">Horario solicitado: <strong style="color:var(--white)">'+horario+'</strong><br>El vendedor confirmará en breve.<br>Recibirás una notificación cuando confirme.</div></div><div class="card"><div class="sec-ttl" style="margin-bottom:10px">📋 Política de asistencia</div><div style="font-size:12px;color:var(--gray);line-height:1.8">• Cancela con al menos 2 horas de anticipación<br>• 3 inasistencias = advertencia en tu perfil<br>• 5 inasistencias = restricción temporal<br>• Ambas partes califican ⭐ la experiencia</div></div><button class="btn btn-ghost" onclick="closeSheet(\'visita\')">Volver al mapa</button>';
  showToast('Solicitud de visita enviada');
}

/* ============================================
   SISTEMA DE RESERVA
   ============================================ */
function iniciarReserva() {
  var car=CARS[STATE.currentCarId];
  if(!car){ document.getElementById('reserva-body').innerHTML='<div class="card"><p style="color:var(--gray);text-align:center">Selecciona un vehículo en el mapa primero.</p></div>'; return; }
  document.getElementById('reserva-body').innerHTML='<div class="card" style="background:rgba(234,179,8,.06);border-color:rgba(234,179,8,.2);text-align:center;padding:20px"><div style="font-size:40px;margin-bottom:8px">🔒</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:20px;letter-spacing:1px">Reservar '+car.name+'</div><div style="font-size:12px;color:var(--gray);margin-top:4px">El monto va directo a la Bóveda Escrow · No al vendedor</div></div><div class="card"><div class="stat-row"><span>Precio vehículo</span><span class="stat-val" style="color:var(--white)">'+car.price+'</span></div><div class="stat-row"><span>Monto reserva (5%)</span><span class="stat-val" style="color:var(--yellow)">$581.500</span></div><div class="stat-row"><span>Plazo reserva</span><span class="stat-val" style="color:var(--cyan)">48 hrs</span></div><div class="stat-row"><span>Si no se concreta</span><span class="stat-val" style="color:var(--green);font-size:13px">Devolución auto.</span></div></div><div class="card" style="background:rgba(34,197,94,.05);border-color:rgba(34,197,94,.15)"><div style="font-size:12px;font-weight:700;color:var(--green);margin-bottom:8px">🛡 ¿Cómo funciona?</div><div style="font-size:12px;color:var(--gray);line-height:1.8">1. Pagas el monto de reserva<br>2. El auto queda 🟡 Reservado en el mapa<br>3. Tienes 48 hrs para concretar la visita<br>4. Si concreta → se descuenta del precio final<br>5. Si no concreta → devolución automática en 24 hrs</div></div><button class="btn btn-yellow" onclick="confirmarReserva()">🔒 Confirmar Reserva · $581.500</button><button class="btn btn-ghost" onclick="closeSheet(\'reserva\')">Cancelar</button>';
}

function confirmarReserva() {
  var deadline=new Date(Date.now()+48*3600000);
  document.getElementById('reserva-body').innerHTML='<div class="countdown-box"><div class="countdown-label">Tiempo restante de reserva</div><div class="countdown-time" id="countdown-timer">47:59:59</div><div class="countdown-label">horas · minutos · segundos</div></div><div class="card" style="background:rgba(234,179,8,.07);border-color:rgba(234,179,8,.2);text-align:center;padding:20px"><div style="font-size:40px;margin-bottom:8px">🎉</div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:22px;letter-spacing:1px">¡Reserva Confirmada!</div><div style="font-size:12px;color:var(--gray);margin-top:6px">$581.500 en Bóveda Escrow · Vence '+deadline.toLocaleDateString()+'</div></div><div class="card"><div class="stat-row"><span>Estado</span><span class="stat-val" style="color:var(--yellow)">🟡 Reservado</span></div><div class="stat-row"><span>Fondos en Escrow</span><span class="stat-val" style="color:var(--green)">✅ Seguros</span></div><div class="stat-row"><span>Vence</span><span class="stat-val" style="color:var(--orange)">'+deadline.toLocaleDateString()+'</span></div></div><button class="btn btn-cyan" onclick="openSheet(\'visita\')">📅 Agendar Visita Ahora</button><button class="btn btn-ghost" onclick="closeSheet(\'reserva\')">Cerrar</button>';
  startCountdown(); showToast('🎉 Reserva confirmada');
}

function startCountdown() {
  var end=Date.now()+48*3600000;
  var iv=setInterval(function(){
    var el=document.getElementById('countdown-timer');
    if(!el){ clearInterval(iv); return; }
    var diff=Math.max(0,end-Date.now());
    var h=Math.floor(diff/3600000); var m=Math.floor((diff%3600000)/60000); var s=Math.floor((diff%60000)/1000);
    el.textContent=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
    if(diff===0) clearInterval(iv);
  },1000);
}

/* ============================================
   PLATA HOY — SUBASTA EXPRESS
   ============================================ */
function abrirPlataHoy() {
  if(STATE.userType==='automotora'){ openSheet('platahoy-automotora'); buildPlataHoyAutomotora(); }
  else { openSheet('platahoy-particular'); buildPlataHoyParticular(); }
}

function buildPlataHoyParticular() {
  var body=document.getElementById('platahoy-particular-body'); if(!body) return;
  body.innerHTML='<div class="platahoy-hero"><div class="platahoy-hero-title">💰 PLATA HOY</div><div class="platahoy-hero-sub">Subasta Express para Automotoras<br>Vende tu auto hoy mismo de forma 100% segura</div></div><div class="card" style="background:rgba(34,197,94,.05);border-color:rgba(34,197,94,.2)"><div style="font-size:13px;font-weight:800;margin-bottom:12px">¿Cómo funciona?</div><div class="how-item" style="padding:8px 0"><div class="how-ico" style="background:rgba(34,197,94,.15);width:36px;height:36px;font-size:16px">1️⃣</div><div><div class="how-ttl" style="font-size:13px">Publicas tu auto</div><div class="how-desc">Fotos, specs y tu precio mínimo de aceptación</div></div></div><div class="how-item" style="padding:8px 0"><div class="how-ico" style="background:rgba(234,179,8,.15);width:36px;height:36px;font-size:16px">2️⃣</div><div><div class="how-ttl" style="font-size:13px">Automotoras pujan</div><div class="how-desc">Empresas verificadas ofertan en tiempo real durante 6 o 12 horas</div></div></div><div class="how-item" style="padding:8px 0"><div class="how-ico" style="background:rgba(59,130,246,.15);width:36px;height:36px;font-size:16px">3️⃣</div><div><div class="how-ttl" style="font-size:13px">Aceptas la mejor oferta</div><div class="how-desc">El dinero entra a la Bóveda Escrow. Lo recibes cuando entregues el auto</div></div></div><div class="how-item" style="padding:8px 0;border:none"><div class="how-ico" style="background:rgba(139,92,246,.15);width:36px;height:36px;font-size:16px">4️⃣</div><div><div class="how-ttl" style="font-size:13px">Entrega y cobro</div><div class="how-desc">FEA digital, entrega coordinada y liberación automática de fondos</div></div></div></div><div class="comision-badge"><span style="color:var(--gray)">Comisión Motorplace</span><span style="font-weight:800;color:var(--green)">Solo 2% del valor final</span></div><button class="btn btn-green" onclick="mostrarFormSubasta()">💰 Activar Plata Hoy para mi auto</button>';
}

function mostrarFormSubasta() {
  var body=document.getElementById('platahoy-particular-body'); if(!body) return;
  body.innerHTML='<div class="platahoy-hero" style="padding:16px;margin-bottom:16px"><div class="platahoy-hero-title" style="font-size:26px">ACTIVAR SUBASTA</div><div class="platahoy-hero-sub">Define tu precio mínimo y la ventana de tiempo</div></div><div class="sec-ttl">📷 Fotos del vehículo</div><div class="photo-grid"><div class="photo-slot add-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-plus"></i></div><div class="photo-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-camera" style="opacity:.3"></i></div><div class="photo-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-camera" style="opacity:.3"></i></div></div><div class="card"><div class="inp-g"><div class="inp-lbl">Marca y Modelo</div><input class="inp" placeholder="ej: Toyota Corolla Cross"></div><div class="inp-row"><div class="inp-g"><div class="inp-lbl">Año</div><input class="inp" placeholder="2020"></div><div class="inp-g"><div class="inp-lbl">Km</div><input class="inp" placeholder="45.000"></div></div><div class="inp-g"><div class="inp-lbl">Estado general</div><div style="display:flex;gap:8px"><div class="mchip on" style="flex:1;text-align:center">⭐ Excelente</div><div class="mchip" style="flex:1;text-align:center">👍 Bueno</div><div class="mchip" style="flex:1;text-align:center">🔧 Regular</div></div></div></div><div class="card"><div class="inp-g"><div class="inp-lbl">💰 Precio mínimo de aceptación</div><div class="precio-minimo-wrap"><span class="precio-minimo-prefix">$</span><input class="inp" id="precio-minimo-inp" placeholder="9.500.000" oninput="calcPrecioDirecta()"></div><div style="font-size:11px;color:var(--gray);margin-top:6px">Las automotoras pujarán desde aquí hacia arriba de $200.000 en $200.000.</div></div><div class="inp-g"><div class="inp-lbl">⚡ Precio Compra Directa</div><div class="precio-minimo-wrap"><span class="precio-minimo-prefix" style="color:var(--blue)">$</span><input class="inp" id="precio-directa-inp" placeholder="Automático (mínimo + 30%)" readonly style="color:var(--blue)"></div></div></div><div class="card"><div class="inp-lbl">⏱ Ventana de subasta</div><div class="tiempo-selector"><div class="tiempo-opt on" onclick="elegirTiempo(6,this)"><div class="tiempo-opt-num">6</div><div class="tiempo-opt-lbl">horas</div><div style="font-size:10px;color:var(--green);margin-top:4px">Express</div></div><div class="tiempo-opt" onclick="elegirTiempo(12,this)"><div class="tiempo-opt-num">12</div><div class="tiempo-opt-lbl">horas</div><div style="font-size:10px;color:var(--gray);margin-top:4px">Estándar</div></div></div></div><div class="comision-badge"><span style="color:var(--gray)">Comisión Motorplace al cerrar</span><span style="font-weight:800;color:var(--green)">2% del valor final</span></div><button class="btn btn-green" onclick="confirmarSubasta()">🚀 Activar Subasta Express</button><button class="btn btn-ghost" onclick="buildPlataHoyParticular()">← Volver</button>';
}

function elegirTiempo(horas, el) {
  STATE.subastaTiempo=horas;
  document.querySelectorAll('.tiempo-opt').forEach(function(o){o.classList.remove('on');});
  el.classList.add('on');
}

function calcPrecioDirecta() {
  var inp=document.getElementById('precio-minimo-inp'); var out=document.getElementById('precio-directa-inp');
  if(!inp||!out) return;
  var val=parseFloat(inp.value.replace(/\D/g,''))||0;
  STATE.subastaMinimo=val;
  out.value=val>0?(Math.round(val*1.3)).toLocaleString('es-CL'):'';
}

function confirmarSubasta() {
  var body=document.getElementById('platahoy-particular-body'); if(!body) return;
  var horas=STATE.subastaTiempo||6;
  var minimo=STATE.subastaMinimo||9500000;
  var directa=Math.round(minimo*1.3);
  var comision=Math.round(minimo*0.02);
  body.innerHTML='<div class="subasta-confirm"><div class="subasta-confirm-ico">🎉</div><div class="subasta-confirm-title">¡Subasta Activada!</div><div style="font-size:13px;color:var(--gray);line-height:1.7;margin-bottom:16px">Tu auto está en subasta ahora mismo.<br>Las automotoras verificadas ya están recibiendo la alerta.</div></div><div class="card"><div class="stat-row"><span>Precio mínimo</span><span class="stat-val" style="color:var(--gray)">$'+minimo.toLocaleString('es-CL')+'</span></div><div class="stat-row"><span>Compra directa</span><span class="stat-val" style="color:var(--blue)">$'+directa.toLocaleString('es-CL')+'</span></div><div class="stat-row"><span>Duración</span><span class="stat-val" style="color:var(--cyan)">'+horas+' horas</span></div><div class="stat-row"><span>Comisión Motorplace</span><span class="stat-val" style="color:var(--green)">$'+comision.toLocaleString('es-CL')+'</span></div><div class="stat-row"><span>Automotoras notificadas</span><span class="stat-val" style="color:var(--orange)">23</span></div></div><div class="card" style="background:rgba(234,179,8,.06);border-color:rgba(234,179,8,.2)"><div style="font-size:12px;font-weight:700;color:var(--yellow);margin-bottom:8px">⏱ Subasta en curso</div><div class="subasta-timer"><div class="timer-block"><div class="timer-num" id="ph-h">0'+horas+'</div><div class="timer-lbl">hrs</div></div><div class="timer-sep">:</div><div class="timer-block"><div class="timer-num" id="ph-m">00</div><div class="timer-lbl">min</div></div><div class="timer-sep">:</div><div class="timer-block"><div class="timer-num" id="ph-s">00</div><div class="timer-lbl">seg</div></div></div><div class="subasta-progress"><div class="subasta-progress-fill" style="width:100%"></div></div></div><div id="pujas-recibidas" class="card"><div style="font-size:12px;font-weight:700;margin-bottom:8px">📊 Pujas recibidas</div><div style="text-align:center;padding:20px;color:var(--gray);font-size:13px">Esperando primeras ofertas…</div></div><button class="btn btn-ghost" onclick="simularPuja()">🔄 Simular puja (demo)</button><button class="btn btn-ghost" onclick="buildPlataHoyParticular()">← Volver al inicio</button>';
  startSubastaTimer(horas);
  setTimeout(function(){simularPuja();},3000);
}

var pujaIdx=0;
var pujaActualMonto=9500000;
var pujasAutos=['AutoPrime SpA','MotorCenter','CarShop Ltda','AutoSur'];

function simularPuja() {
  pujaActualMonto+=200000;
  var el=document.getElementById('pujas-recibidas'); if(!el) return;
  var auto=pujasAutos[pujaIdx%pujasAutos.length]; pujaIdx++;
  el.innerHTML='<div style="font-size:12px;font-weight:700;margin-bottom:8px">📊 Mejor oferta actual</div><div class="puja-row winner"><span class="puja-auto">👑 '+auto+'</span><span class="puja-monto">$'+pujaActualMonto.toLocaleString('es-CL')+'</span><span class="puja-time">ahora</span></div>';
  showToast('💰 Nueva puja: $'+pujaActualMonto.toLocaleString('es-CL')+' de '+auto);
}

function startSubastaTimer(horas) {
  var end=Date.now()+horas*3600000;
  var iv=setInterval(function(){
    var eh=document.getElementById('ph-h'); var em=document.getElementById('ph-m'); var es=document.getElementById('ph-s');
    if(!eh){clearInterval(iv);return;}
    var diff=Math.max(0,end-Date.now());
    var h=Math.floor(diff/3600000); var m=Math.floor((diff%3600000)/60000); var s=Math.floor((diff%60000)/1000);
    eh.textContent=String(h).padStart(2,'0'); em.textContent=String(m).padStart(2,'0'); es.textContent=String(s).padStart(2,'0');
    if(diff===0) clearInterval(iv);
  },1000);
}

function buildPlataHoyAutomotora() {
  var body=document.getElementById('platahoy-automotora-body'); if(!body) return;
  var subastas='';
  for(var i=0;i<SUBASTAS.length;i++) subastas+=buildSubastaCard(SUBASTAS[i]);
  body.innerHTML='<div class="alerta-card"><div class="alerta-card-title">🚨 SUBASTAS ACTIVAS EN TU ZONA</div><div class="alerta-card-sub">'+SUBASTAS.length+' vehículos disponibles ahora mismo. Pujas suben de $200.000 en $200.000.</div></div><div class="comision-badge" style="margin-bottom:16px"><span style="color:var(--gray)">Comisión Motorplace por adjudicación</span><span style="font-weight:700;color:var(--white);font-size:11px">2% del valor final</span></div>'+subastas+'<div class="card" style="background:rgba(59,130,246,.05);border-color:rgba(59,130,246,.15)"><div style="font-size:12px;font-weight:700;color:var(--blue);margin-bottom:8px">📋 Tus adjudicaciones</div><div style="font-size:12px;color:var(--gray);text-align:center;padding:12px">Sin adjudicaciones activas</div></div>';
}

function buildSubastaCard(s) {
  var urgente=s.horasRestantes<=2?'urgente':'activa';
  var pujasHtml='';
  if(s.pujas.length===0) {
    pujasHtml='<div class="pujas-lista"><div style="text-align:center;color:var(--gray);font-size:12px;padding:12px">Sin pujas aún · Sé el primero</div></div>';
  } else {
    pujasHtml='<div class="pujas-lista">';
    for(var i=0;i<s.pujas.length;i++){
      var p=s.pujas[i];
      pujasHtml+='<div class="puja-row'+(p.winner?' winner':'')+'"><span class="puja-auto">'+(p.winner?'👑 ':'')+p.auto+'</span><span class="puja-monto">$'+p.monto.toLocaleString('es-CL')+'</span><span class="puja-time">'+p.tiempo+'</span></div>';
    }
    pujasHtml+='</div>';
  }
  var siguientePuja=s.precioActual+200000;
  return '<div class="subasta-card '+urgente+'"><div class="subasta-header"><div class="subasta-img">'+s.ico+'</div><div style="flex:1"><div class="subasta-nombre">'+s.nombre+' '+s.anio+'</div><div class="subasta-meta">'+s.km+' km · '+s.color+' · '+s.zona+'</div><div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap"><span class="badge badge-g">KYC ✓</span><span class="badge badge-p">Autofact ✓</span>'+(s.ficha.multas===0?'<span class="badge badge-g">Sin multas</span>':'')+(urgente==='urgente'?'<span class="badge badge-r">🔥 Urgente</span>':'')+'</div></div></div><div class="subasta-timer"><div class="timer-block"><div class="timer-num" style="font-size:22px">'+String(s.horasRestantes).padStart(2,'0')+'</div><div class="timer-lbl">hrs</div></div><div class="timer-sep" style="font-size:20px">:</div><div class="timer-block"><div class="timer-num" style="font-size:22px">'+String(s.minutosRestantes).padStart(2,'0')+'</div><div class="timer-lbl">min</div></div></div><div class="subasta-progress"><div class="subasta-progress-fill" style="width:'+Math.round((1-s.horasRestantes/s.horasTotal)*100)+'%"></div></div><div class="subasta-precios"><div class="precio-block"><div class="precio-lbl">Mínimo</div><div class="precio-val minimo">$'+(s.precioMinimo/1000000).toFixed(1)+'M</div></div><div class="precio-block"><div class="precio-lbl">Mejor oferta</div><div class="precio-val actual">$'+(s.precioActual/1000000).toFixed(1)+'M</div></div><div class="precio-block"><div class="precio-lbl">Compra directa</div><div class="precio-val directa">$'+(s.precioDirecta/1000000).toFixed(1)+'M</div></div></div>'+pujasHtml+'<div class="subasta-btns"><button class="btn-pujar" onclick="hacerPuja(\''+s.id+'\','+siguientePuja+')"><i class="fa-solid fa-gavel"></i> Pujar $'+siguientePuja.toLocaleString('es-CL')+'</button><button class="btn-compra-directa" onclick="compraDirecta(\''+s.id+'\','+s.precioDirecta+')">⚡ Compra<br>Directa<br>$'+(s.precioDirecta/1000000).toFixed(1)+'M</button></div></div>';
}

function hacerPuja(id, monto) {
  var s=null; for(var i=0;i<SUBASTAS.length;i++) if(SUBASTAS[i].id===id){s=SUBASTAS[i];break;}
  if(!s) return;
  if(!confirm('¿Confirmas tu puja de $'+monto.toLocaleString('es-CL')+' por '+s.nombre+'?')) return;
  s.precioActual=monto;
  s.pujas.unshift({auto:'AutoPrime SpA',monto:monto,tiempo:'ahora',winner:true});
  if(s.pujas[1]) s.pujas[1].winner=false;
  showToast('✅ Puja realizada: $'+monto.toLocaleString('es-CL'));
  buildPlataHoyAutomotora();
}

function compraDirecta(id, monto) {
  var s=null; for(var i=0;i<SUBASTAS.length;i++) if(SUBASTAS[i].id===id){s=SUBASTAS[i];break;}
  if(!s) return;
  if(!confirm('⚡ COMPRA DIRECTA\n\n'+s.nombre+' '+s.anio+'\nMonto: $'+monto.toLocaleString('es-CL')+'\n\nEsto cierra la subasta y va a Bóveda Escrow.\n¿Confirmas?')) return;
  var comision=Math.round(monto*0.02);
  var body=document.getElementById('platahoy-automotora-body'); if(!body) return;
  body.innerHTML='<div class="subasta-confirm"><div class="subasta-confirm-ico">🏆</div><div class="subasta-confirm-title">¡Auto Adjudicado!</div><div style="font-size:13px;color:var(--gray);line-height:1.7;margin-bottom:16px">Compraste '+s.nombre+' '+s.anio+' por Compra Directa.<br>Los fondos van a Bóveda Escrow ahora.</div></div><div class="card"><div class="stat-row"><span>Vehículo</span><span class="stat-val" style="font-size:14px">'+s.nombre+'</span></div><div class="stat-row"><span>Monto pagado</span><span class="stat-val" style="color:var(--green)">$'+monto.toLocaleString('es-CL')+'</span></div><div class="stat-row"><span>Comisión Motorplace (2%)</span><span class="stat-val" style="color:var(--orange)">$'+comision.toLocaleString('es-CL')+'</span></div><div class="stat-row"><span>Estado Escrow</span><span class="stat-val" style="color:var(--yellow)">🔒 Retenido</span></div><div class="stat-row"><span>Entrega coordinada</span><span class="stat-val" style="color:var(--cyan)">Hoy</span></div></div><button class="btn btn-purple" onclick="openSheet(\'escrow\')">🔒 Ver Bóveda Escrow</button><button class="btn btn-blue" onclick="openSheet(\'transferencia\')">🔄 Seguimiento E2E</button><button class="btn btn-ghost" onclick="buildPlataHoyAutomotora()">← Ver más subastas</button>';
  showToast('🏆 ¡Adjudicado! Fondos en Escrow');
}

/* ============================================
   CRÉDITO
   ============================================ */
function buildConvenios() {
  var el=document.getElementById('convenios-block'); if(!el) return;
  if(STATE.userType==='automotora') {
    el.innerHTML='<div class="sec-ttl">Convenios SaaS B2B</div><div class="conv-card"><strong style="color:var(--blue)">🏦 Banco Estado · Tasa preferencial</strong><br>0.8% mensual · Preaprobación 1 min · Cupo hasta $80M</div><div class="conv-card"><strong style="color:var(--blue)">🏦 Santander · Convenio Automotora</strong><br>0.9% mensual · Sin pie mínimo</div><div class="conv-card"><strong style="color:var(--blue)">💳 Tanner / Autofin · Financiamiento</strong><br>1.0% mensual · Especial parque certificado</div>';
  } else { el.innerHTML=''; }
}

function calcCredito() {
  function gv(id,def){ var e=document.getElementById(id); return e?parseFloat(e.value.replace(/\D/g,''))||def:def; }
  var precio=gv('cr-precio',11630000); var pie=gv('cr-pie',20)/100; var plazo=gv('cr-plazo',48); var tasa=gv('cr-tasa',1.2)/100;
  var pieVal=precio*pie; var monto=precio-pieVal;
  var cuota=tasa===0?monto/plazo:monto*(tasa*Math.pow(1+tasa,plazo))/(Math.pow(1+tasa,plazo)-1);
  var total=cuota*plazo+pieVal;
  function fmt(n){return '$'+Math.round(n).toLocaleString('es-CL');}
  function set(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
  set('cr-res-pie',fmt(pieVal)); set('cr-res-monto',fmt(monto)); set('cr-res-cuota',fmt(cuota)); set('cr-res-total',fmt(total));
}

/* ============================================
   CHAT IA
   ============================================ */
function sendChat() {
  var inp=document.getElementById('chatInp');
  var msg=inp.value.trim(); if(!msg) return;
  addMsg(msg,'me'); inp.value='';
  setTimeout(function(){ addMsg(AI_REPLIES[STATE.aiMsgIdx%AI_REPLIES.length],'ai'); STATE.aiMsgIdx++; },800);
}
function addMsg(text,type) {
  var box=document.getElementById('chatBox'); var d=document.createElement('div');
  d.className='cmsg '+type; d.textContent=text; box.appendChild(d); box.scrollTop=box.scrollHeight;
}
function quickMsg(text) {
  var inp=document.getElementById('chatInp'); if(inp) inp.value=text;
  if(!document.getElementById('sheet-chat').classList.contains('on')) openSheet('chat');
  sendChat();
}

/* ============================================
   DRAWER
   ============================================ */
function buildDrawer() {
  var isA=STATE.userType==='automotora';
  var av=document.getElementById('drw-av');
  av.textContent=isA?'A':'P';
  av.style.background=isA?'linear-gradient(135deg,#f59e0b,#d97706)':'linear-gradient(135deg,var(--red),#ff4d6d)';
  document.getElementById('drw-uname').textContent=isA?'AutoPrime SpA':'Particular';
  document.getElementById('drw-usub').textContent=isA?'SaaS Pro · 12 pubs':'KYC Verificado · Free';
  var saas=isA?'<div class="drw-sep">Automotora SaaS</div><div class="di" onclick="closeDrawer();openSheet(\'cargamasiva\')"><div class="di-ico" style="background:rgba(245,158,11,.1)">📦</div><div class="di-lbl">Carga Masiva<div class="di-sub">Excel / CSV</div></div><div class="di-badge-o">B2B</div></div><div class="di" onclick="closeDrawer();openSheet(\'dashboard\')"><div class="di-ico" style="background:rgba(59,130,246,.1)">📊</div><div class="di-lbl">Dashboard Analytics<div class="di-sub">Métricas en tiempo real</div></div></div>':'';
  document.getElementById('drawerItems').innerHTML='<div class="drw-sep">Principal</div><div class="di on" onclick="closeDrawer()"><div class="di-ico" style="background:rgba(232,0,29,.1)">🗺️</div><div class="di-lbl">Mapa Interactivo<div class="di-sub">Búsqueda georreferenciada</div></div></div><div class="di" onclick="closeDrawer();openSheet(\'busqueda\')"><div class="di-ico" style="background:rgba(59,130,246,.1)">🔍</div><div class="di-lbl">Buscar Vehículos<div class="di-sub">Filtros + consulta patente</div></div></div><div class="di" onclick="closeDrawer();openSheet(\'publicar\')"><div class="di-ico" style="background:rgba(34,197,94,.1)">➕</div><div class="di-lbl">Publicar Vehículo<div class="di-sub">Fotos + valorización IA</div></div></div><div class="di" onclick="closeDrawer();abrirPlataHoy()"><div class="di-ico" style="background:rgba(34,197,94,.15)">💰</div><div class="di-lbl">Plata Hoy<div class="di-sub">Subasta Express · Vende hoy</div></div><div class="di-badge">HOT</div></div><div class="drw-sep">Servicios</div><div class="di" onclick="closeDrawer();openSheet(\'escrow\')"><div class="di-ico" style="background:rgba(139,92,246,.1)">🔒</div><div class="di-lbl">Bóveda Escrow<div class="di-sub">Compra 100% segura</div></div><div class="di-badge">ACTIVO</div></div><div class="di" onclick="closeDrawer();openSheet(\'transferencia\')"><div class="di-ico" style="background:rgba(6,182,212,.1)">🔄</div><div class="di-lbl">Transferencia E2E<div class="di-sub">Seguimiento completo</div></div></div><div class="di" onclick="closeDrawer();openSheet(\'como-funciona\')"><div class="di-ico" style="background:rgba(234,179,8,.1)">❓</div><div class="di-lbl">Cómo Funciona<div class="di-sub">Guía completa Motorplace</div></div></div><div class="di" onclick="closeDrawer();openSheet(\'chat\')"><div class="di-ico" style="background:rgba(232,0,29,.08)">🤖</div><div class="di-lbl">Chat IA<div class="di-sub">Asesor 24/7</div></div></div><div class="di" onclick="closeDrawer();openSheet(\'credito\')"><div class="di-ico" style="background:rgba(245,158,11,.1)">💳</div><div class="di-lbl">Crédito Automotriz<div class="di-sub">Simulador + convenios</div></div></div><div class="di" onclick="closeDrawer();openSheet(\'planes\')"><div class="di-ico" style="background:rgba(139,92,246,.1)">⭐</div><div class="di-lbl">Planes y Precios<div class="di-sub">Gratis hasta Enterprise</div></div></div>'+saas+'<div class="drw-sep">Mi cuenta</div><div class="di" onclick="closeDrawer();openSheet(\'perfil\')"><div class="di-ico" style="background:rgba(255,255,255,.05)">👤</div><div class="di-lbl">Mi Perfil<div class="di-sub">KYC, badges, historial</div></div></div><div class="di" onclick="closeDrawer();openSheet(\'notif\')"><div class="di-ico" style="background:rgba(255,255,255,.05)">🔔</div><div class="di-lbl">Notificaciones<div class="di-sub">5 sin leer</div></div><div class="di-badge">5</div></div>';
}
function openDrawer(){ document.getElementById('drawer').classList.add('on'); document.getElementById('drawerOverlay').classList.add('on'); }
function closeDrawer(){ document.getElementById('drawer').classList.remove('on'); document.getElementById('drawerOverlay').classList.remove('on'); }

/* ============================================
   PERFIL
   ============================================ */
function buildPerfil() {
  var isA=STATE.userType==='automotora';
  document.getElementById('perfil-ttl').textContent=isA?'🏢 Panel Automotora':'👤 Mi Perfil';
  var avBg=isA?'linear-gradient(135deg,#f59e0b,#d97706)':'linear-gradient(135deg,var(--red),#ff4d6d)';
  var nombre=isA?'AutoPrime SpA':'Usuario Particular';
  var sub=isA?'SaaS Profesional · Plan Empresarial':'KYC Verificado · Plan Gratuito';
  var pubs=isA?'12':'1'; var vistas=isA?'4.821':'847'; var contactos=isA?'198':'23'; var fichas=isA?'34':'0'; var escrows=isA?'8':'0';
  var kycHtml='<div class="kyc-badge"><div class="kyc-icon">✅</div><div><div class="kyc-label">RUT Verificado</div></div></div><div class="kyc-badge"><div class="kyc-icon">📱</div><div><div class="kyc-label">Teléfono Verificado</div></div></div><div class="kyc-badge"><div class="kyc-icon">📧</div><div><div class="kyc-label">Email Verificado</div></div></div><div class="kyc-badge"><div class="kyc-icon">🤳</div><div><div class="kyc-label">Selfie KYC Verificada</div></div></div>'+(isA?'<div class="kyc-badge"><div class="kyc-icon">🏦</div><div><div class="kyc-label">Cuenta Bancaria Registrada</div></div></div>':'');
  var saasPanel=isA?'<div class="sec-ttl">Panel SaaS</div><div class="card" style="background:rgba(245,158,11,.05);border-color:rgba(245,158,11,.2)"><div class="stat-row"><span>Plan activo</span><span class="stat-val" style="color:var(--orange)">PRO</span></div><div class="stat-row"><span>Publicaciones</span><span class="stat-val">Ilimitadas</span></div><div class="stat-row"><span>Autofact</span><span class="stat-val" style="color:var(--green)">VIP</span></div></div>':'';
  document.getElementById('perfil-body').innerHTML='<div class="profile-hero"><div class="profile-av-wrap"><div class="profile-av" style="background:'+avBg+'">'+(isA?'A':'P')+'</div><div class="profile-av-edit">✏️</div></div><div class="profile-name">'+nombre+'</div><div class="profile-sub">'+sub+'</div><div style="display:flex;gap:16px;justify-content:center;margin-top:12px"><div style="text-align:center"><div style="font-family:\'Bebas Neue\',sans-serif;font-size:24px;color:var(--green)">'+(isA?'4.9':'5.0')+'</div><div style="font-size:10px;color:var(--gray)">Rating</div></div><div style="text-align:center"><div style="font-family:\'Bebas Neue\',sans-serif;font-size:24px;color:var(--blue)">'+(isA?'47':'2')+'</div><div style="font-size:10px;color:var(--gray)">Ventas</div></div><div style="text-align:center"><div style="font-family:\'Bebas Neue\',sans-serif;font-size:24px;color:var(--orange)">'+pubs+'</div><div style="font-size:10px;color:var(--gray)">Activos</div></div></div></div><div class="sec-ttl">🛡 Verificaciones KYC</div>'+kycHtml+'<div class="sec-ttl" style="margin-top:16px">📊 Estadísticas</div><div class="card"><div class="stat-row"><span>Publicaciones activas</span><span class="stat-val" style="color:var(--red)">'+pubs+'</span></div><div class="stat-row"><span>Vistas este mes</span><span class="stat-val" style="color:var(--blue)">'+vistas+'</span></div><div class="stat-row"><span>Contactos recibidos</span><span class="stat-val" style="color:var(--green)">'+contactos+'</span></div><div class="stat-row"><span>Fichas Autofact</span><span class="stat-val" style="color:var(--purple)">'+fichas+'</span></div><div class="stat-row"><span>Transacciones Escrow</span><span class="stat-val" style="color:var(--cyan)">'+escrows+'</span></div></div>'+saasPanel+'<button class="btn btn-ghost" onclick="closeSheet(\'perfil\');setTimeout(doLogout,300)">🚪 Cerrar sesión</button>';
}

/* ============================================
   PUBLICAR
   ============================================ */
function buildPublicar() {
  var isA=STATE.userType==='automotora';
  document.getElementById('pub-title').textContent=isA?'📦 Publicar / Carga Masiva':'➕ Publicar Vehículo';
  document.getElementById('pub-body').innerHTML=isA?getPublicarAutomotora():getPublicarParticular();
}

function getPublicarParticular() {
  return '<div class="sec-ttl">📷 Fotos del Vehículo</div><div class="photo-grid"><div class="photo-slot filled" onclick="fakePhoto(this)">🏍️</div><div class="photo-slot filled" onclick="fakePhoto(this)">📸</div><div class="photo-slot add-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-plus"></i></div><div class="photo-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-camera" style="opacity:.3"></i></div><div class="photo-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-camera" style="opacity:.3"></i></div><div class="photo-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-camera" style="opacity:.3"></i></div></div><p style="font-size:11px;color:var(--gray);text-align:center;margin-bottom:16px">La IA detecta el modelo automáticamente · Mínimo 3 fotos</p><div class="card"><div class="inp-g"><div class="inp-lbl">Marca</div><input class="inp" placeholder="ej: BMW"></div><div class="inp-g"><div class="inp-lbl">Modelo</div><input class="inp" placeholder="ej: S1000 XR"></div><div class="inp-row"><div class="inp-g"><div class="inp-lbl">Año</div><input class="inp" placeholder="2021"></div><div class="inp-g"><div class="inp-lbl">Km</div><input class="inp" placeholder="18.000"></div></div><div class="inp-g"><div class="inp-lbl">Precio CLP</div><input class="inp" placeholder="11.630.000"></div><div class="inp-g"><div class="inp-lbl">Descripción</div><textarea class="inp" rows="3" placeholder="Estado, accesorios, historial, razón de venta…" style="resize:none"></textarea></div><div class="inp-g"><div class="inp-lbl">¿Acepta parte de pago?</div><div style="display:flex;gap:8px"><div class="mchip on" style="flex:1;text-align:center">✅ Sí</div><div class="mchip" style="flex:1;text-align:center">❌ No</div></div></div></div><div class="card" style="background:rgba(34,197,94,.05);border-color:rgba(34,197,94,.2)"><div style="font-size:12px;font-weight:700;color:var(--green);margin-bottom:8px">🤖 Valorización IA</div><div class="stat-row"><span>Precio mercado est.</span><span class="stat-val" style="color:var(--green)">$11.2–12.1M</span></div><div class="stat-row"><span>Tu precio</span><span class="stat-val" style="color:var(--orange)">Pendiente</span></div><div class="stat-row"><span>Demanda en zona</span><span class="stat-val" style="color:var(--blue)">Alta</span></div></div><div class="card" style="background:rgba(59,130,246,.05);border-color:rgba(59,130,246,.15)"><div style="font-size:12px;font-weight:700;color:var(--blue);margin-bottom:8px">🛡 Incluido gratis con tu publicación</div><div style="font-size:12px;color:var(--gray);line-height:1.8">✅ Informe básico PatentesChile<br>✅ Badge Verificado por Motorplace<br>✅ Sello de confianza en mapa y ficha</div></div><button class="btn btn-green">✅ Publicar con FEA Digital</button><button class="btn btn-ghost" onclick="abrirPlataHoy()">💰 O vender vía Plata Hoy (Subasta Express)</button>';
}

function getPublicarAutomotora() {
  return '<div class="card" style="background:rgba(245,158,11,.06);border-color:rgba(245,158,11,.2)"><div style="font-size:12px;font-weight:700;color:var(--orange);margin-bottom:6px">🏢 Panel SaaS Automotora</div><div style="font-size:12px;color:var(--gray)">Publica individual o carga masiva con Excel/CSV.</div></div><div class="sec-ttl">📷 Fotos</div><div class="photo-grid"><div class="photo-slot filled" onclick="fakePhoto(this)">🚗</div><div class="photo-slot add-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-plus"></i></div><div class="photo-slot" onclick="fakePhoto(this)"><i class="fa-solid fa-camera" style="opacity:.3"></i></div></div><div class="card"><div class="inp-g"><div class="inp-lbl">Marca</div><input class="inp" placeholder="ej: Mercedes-Benz"></div><div class="inp-g"><div class="inp-lbl">Modelo</div><input class="inp" placeholder="ej: GLA 200 AMG"></div><div class="inp-row"><div class="inp-g"><div class="inp-lbl">Año</div><input class="inp" value="2022"></div><div class="inp-g"><div class="inp-lbl">Km</div><input class="inp" value="32.000"></div></div><div class="inp-g"><div class="inp-lbl">Precio CLP</div><input class="inp" value="18.900.000"></div><div class="inp-g"><div class="inp-lbl">Stock disponible</div><div style="display:flex;gap:8px"><div class="mchip on" style="flex:1;text-align:center">✅ Disponible</div><div class="mchip" style="flex:1;text-align:center">❌ Sin Stock</div></div></div></div><button class="btn btn-orange">📦 Publicar en Stock</button><button class="btn btn-ghost" onclick="closeSheet(\'publicar\');openSheet(\'cargamasiva\')">📊 Ir a Carga Masiva</button>';
}

function fakePhoto(el) {
  var emojis=['🏍️','🚗','🚙','📸','🖼️','⚙️'];
  el.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
  el.classList.add('filled'); el.classList.remove('add-slot');
}

/* ============================================
   SHEETS
   ============================================ */
function openSheet(id) {
  closeDrawer();
  var s=document.getElementById('sheet-'+id); if(!s) return;
  s.style.display='block';
  setTimeout(function(){s.classList.add('on');},10);
  if(id==='visita')   solicitarVisita();
  if(id==='reserva')  iniciarReserva();
}
function closeSheet(id) {
  var s=document.getElementById('sheet-'+id); if(!s) return;
  s.classList.remove('on');
  setTimeout(function(){s.style.display='none';},360);
}

/* ============================================
   NAV
   ============================================ */
function navTo(id) {
  document.querySelectorAll('.bni').forEach(function(b){b.classList.remove('on');});
  var el=document.getElementById('bni-'+id); if(el) el.classList.add('on');
}

/* ============================================
   TOAST
   ============================================ */
function showToast(msg) {
  var old=document.getElementById('toast'); if(old) old.remove();
  var t=document.createElement('div'); t.id='toast'; t.textContent=msg;
  t.style.cssText='position:absolute;bottom:90px;left:50%;transform:translateX(-50%);background:rgba(17,24,39,.97);color:#fff;padding:10px 20px;border-radius:20px;font-size:13px;font-weight:600;z-index:999;border:1px solid rgba(255,255,255,.1);white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.4);transition:opacity .3s;';
  document.getElementById('app').appendChild(t);
  setTimeout(function(){t.style.opacity='0';setTimeout(function(){t.remove();},300);},2500);
}
