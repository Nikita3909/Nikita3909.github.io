/* ============================================================
   DEMO API — replaces the real server for the portfolio demo.
   Every number, name and invoice here is randomly generated for a
   fictional company ("GreenLeaf Eco Products"). No real data.
   It intercepts fetch('/api/...') and returns responses with the
   same structure the real Command Center server returns.
   ============================================================ */
(function () {
  // ── Seeded random (same demo data on every visit) ──
  let seed = 20260701;
  function rnd() { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; }
  const ri = (a, b) => Math.floor(a + rnd() * (b - a + 1));
  const rf = (a, b) => a + rnd() * (b - a);
  const pick = arr => arr[Math.floor(rnd() * arr.length)];
  const round = (n, d = 0) => Math.round(n * 10 ** d) / 10 ** d;

  const TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);
  const pad = n => String(n).padStart(2, '0');
  const dmy = d => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const MNAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const MSHORT = MNAMES.map(m => m.slice(0, 3));
  const monKey = (y, m) => { const d = new Date(y, m, 1); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`; };

  // ── Fictional master data ──
  const CUSTOMERS = [
    'Sunrise Foods Pvt Ltd', 'Blue Lagoon Cafes', 'Spice Route Restaurants', 'FreshBite Cloud Kitchens', 'Urban Brew Coffee Co',
    'Golden Spoon Caterers', 'Green Basket Retail', 'Happy Scoops Ice Cream', 'Metro Hotels & Resorts', 'Daily Grind Cafe Chain',
    'Coastal Kitchens LLP', 'Royal Feast Banquets', 'QuickServe Foods', 'Palm Grove Hospitality', 'Tasty Trails Distributors',
    'Northstar Airline Catering', 'Riverbend Sweets', 'Cloud Nine Desserts', 'Harvest Table Foods', 'Silverline Supermarts',
    'Orange Leaf Juice Bars', 'Peak Tea Company', 'Bayview Restaurants', 'Evergreen Exports', 'City Snacks Wholesale',
    'Lotus Event Caterers', 'Pinecone Bakery', 'Saffron Kitchens', 'Maple Street Foods', 'Crystal Dairy Products'
  ];
  const REPS = ['Arjun Mehta', 'Priya Sharma', 'Rahul Verma', 'Sneha Iyer', 'Karan Patel', 'Neha Joshi'];
  const PLACES = [['Mumbai', 'Maharashtra'], ['Pune', 'Maharashtra'], ['Delhi', 'Delhi'], ['Bengaluru', 'Karnataka'], ['Chennai', 'Tamil Nadu'],
    ['Hyderabad', 'Telangana'], ['Ahmedabad', 'Gujarat'], ['Jaipur', 'Rajasthan'], ['Kolkata', 'West Bengal'], ['Kochi', 'Kerala'], ['Indore', 'Madhya Pradesh']];
  const FG_CATS = {
    'Wooden cutlery': ['Wooden Spoon 140mm', 'Wooden Fork 160mm', 'Wooden Knife 160mm', 'Wooden Spoon 110mm', 'Wooden Spork 140mm'],
    'Straw': ['Paper Straw 6mm', 'Paper Straw 8mm', 'Paper Straw 10mm', 'Wrapped Paper Straw 6mm', 'Bubble Tea Straw 12mm'],
    'Stirrer': ['Coffee Stirrer 140mm', 'Coffee Stirrer 110mm', 'Wrapped Stirrer 140mm', 'Stirrer 178mm'],
    'Ice cream': ['Ice Cream Stick 93mm', 'Ice Cream Spoon 75mm', 'Ice Cream Stick 114mm', 'Cup Spoon 95mm'],
    'Bamboo': ['Bamboo Skewer 150mm', 'Bamboo Skewer 200mm', 'Bamboo Paddle Pick 90mm', 'Bamboo Chopsticks'],
    'Cutlery Set': ['Cutlery Set 3-in-1', 'Cutlery Set 4-in-1', 'Cutlery Set with Napkin'],
    'Toothpick': ['Toothpick Wrapped', 'Toothpick Box 100']
  };
  const RM_CATS = {
    'Wood Sheet': ['Birch Veneer A', 'Birch Veneer B', 'Poplar Veneer'],
    'Paper Reel': ['Kraft Reel 120gsm', 'Food Paper Reel 80gsm', 'Wrapping Reel 28mm'],
    'Packing': ['Carton 5-Ply', 'Carton 3-Ply', 'Poly Bag Small', 'Shrink Roll'],
    'Glue': ['Food Grade Glue', 'Hot Melt Glue'],
    'Label': ['Printed Label A', 'Barcode Label'],
    'Tissue': ['Napkin Tissue 30x30']
  };
  const VARIANTS = ['', ' (Bulk)', ' (Retail)', ' Natural', ' Premium', ' Export'];

  // ── FG / RM stock ──
  function buildStock(cats, unitList, count, costRange, isFG) {
    const ims = [];
    let i = 0;
    while (ims.length < count) {
      for (const [cat, items] of Object.entries(cats)) {
        for (const base of items) {
          if (ims.length >= count) break;
          const item = base + VARIANTS[i % VARIANTS.length];
          i++;
          const maxLevel = ri(50, 900);
          const r = rnd();
          let closing = r < 0.12 ? ri(0, Math.round(maxLevel * 0.15)) : ri(Math.round(maxLevel * 0.2), maxLevel);
          if (r > 0.97) closing = -ri(1, 30);
          const cost = rnd() < 0.07 ? 0 : round(rf(costRange[0], costRange[1]), 2);
          const avgDaily = round(rf(0.5, maxLevel / 25), 1);
          ims.push({
            skuCode: (isFG ? 'FG' : 'RM') + String(1000 + ims.length), item, category: cat, unit: pick(unitList),
            closing, avgDaily, maxLevel, availPct: isFG ? round(Math.max(closing, 0) / maxLevel * 100, 1) : null,
            cost, value: round(Math.max(closing, 0) * cost)
          });
        }
      }
    }
    const dead = ims.filter(() => rnd() < 0.06).slice(0, isFG ? 14 : 6).map(x => ({ name: x.item, qty: ri(5, 120) }));
    return { ok: true, ims, dead };
  }
  const FG = buildStock(FG_CATS, ['Carton', 'Bags'], 160, [900, 6500], true);
  const RM = buildStock(RM_CATS, ['Kg', 'Pcs', 'Roll'], 120, [40, 900], false);

  // ── OS ageing invoices ──
  const OS = (() => {
    const invoices = [];
    for (let n = 0; n < 420; n++) {
      const terms = pick([15, 30, 30, 45, 45, 60]);
      const disp = addDays(TODAY, -ri(3, 190));
      const due = addDays(disp, terms);
      const daysOver = Math.round((TODAY - due) / 86400000);
      const bucket = daysOver <= 0 ? 'notdue' : daysOver <= 30 ? '0-30' : daysOver <= 60 ? '31-60' : daysOver <= 90 ? '61-90' : '90+';
      if (daysOver > 120 && rnd() < 0.7) continue; // older invoices mostly paid
      const [city, state] = pick(PLACES);
      const amount = ri(8000, 450000);
      invoices.push({
        invoiceNo: 'GL/' + (2600 + n), customer: pick(CUSTOMERS), terms: String(terms), salesRep: pick(REPS), state, city,
        dispDate: dmy(disp), dueDate: dmy(due), daysOver, bucket, amount, gst: round(amount * 0.18),
        payStatus: null, payPlanned: '', payActual: ''
      });
    }
    return { ok: true, invoices, today: dmy(TODAY) };
  })();

  // ── Pending orders + hold orders ──
  const allFgItems = FG.ims.map(x => x);
  function buildOrders(count, hold) {
    const orders = [];
    for (let n = 0; n < count; n++) {
      const p = pick(allFgItems);
      const [city, state] = pick(PLACES);
      const qty = ri(20, 600);
      const dispatchQty = rnd() < 0.3 ? ri(1, qty - 1) : 0;
      const pendingQty = qty - dispatchQty;
      const rate = p.cost ? p.cost * rf(1.15, 1.45) : rf(1200, 5000);
      const planned = addDays(TODAY, ri(-35, 25));
      const pendingAmt = round(pendingQty * rate);
      const o = {
        orderId: 'SO-' + (hold ? 8800 : 5400) + n, customer: pick(CUSTOMERS), city, state, salesRep: pick(REPS),
        category: p.category, product: p.item, qty, plannedDate: dmy(planned),
        isOverdue: planned < TODAY, pendingQty, pendingAmt, pendingGst: round(pendingAmt * 0.18)
      };
      if (hold) Object.assign(o, {
        poNumber: 'PO-' + ri(10000, 99999), holdReason: pick(['Payment pending from customer', 'Customer asked to hold', 'Artwork approval pending', 'Credit limit exceeded']),
        holdDate: dmy(addDays(TODAY, -ri(2, 40))), holdBy: pick(['Sales', 'Accounts', 'Admin']), expectedDate: ''
      });
      else Object.assign(o, { orderStatus: dispatchQty ? 'Partial' : '', dispatchQty });
      orders.push(o);
    }
    return { ok: true, orders };
  }
  const PO = buildOrders(96, false);
  const HOLD = buildOrders(11, true);

  // ── Sales pipeline (per month) ──
  function buildPipeline(monthLabel) {
    const now = TODAY;
    const sel = monthLabel ? MNAMES.findIndex(m => monthLabel.startsWith(m)) : now.getMonth();
    const selYear = monthLabel ? +monthLabel.split(' ')[1] : now.getFullYear();
    const saved = seed; seed = 777 + sel * 31 + selYear; // stable per month
    const rows = FG.ims.slice(0, 70).map((p, i) => {
      const opening = ri(0, 300), inward = ri(0, 400), total = opening + inward;
      const live = ri(0, 25);
      const target = ri(80, 900);
      const w = [ri(0, target / 4), ri(0, target / 4), ri(0, target / 4), ri(0, target / 5)];
      const dispatch = w.reduce((a, b) => a + b, 0);
      const saleRate = round(p.cost ? p.cost * 1.3 : 2500);
      const pending = Math.max(target - dispatch, 0);
      const dispLines = Array.from({ length: ri(1, 4) }, () => {
        const qty = ri(5, 120);
        return { date: dmy(new Date(selYear, sel, ri(1, 27))), invoice: 'GL/INV/' + ri(3000, 9999), customer: pick(CUSTOMERS), qty, rate: saleRate, amt: qty * saleRate, gst: round(qty * saleRate * 0.18) };
      });
      return {
        sr: i + 1, name: p.item, live, opening, inward, total, target, orderQty: dispatch + pending,
        w1: w[0], w2: w[1], w3: w[2], w4: w[3], dispatch, pending, ach: target ? Math.round(dispatch / target * 100) : 0,
        saleRate, pendingAmt: round(pending * saleRate), dispLines, custCount: ri(1, 9)
      };
    });
    seed = saved;
    const sum = f => rows.reduce((s, r) => s + f(r), 0);
    const totTarget = sum(r => r.target), totDisp = sum(r => r.dispatch), totPendAmt = sum(r => r.pendingAmt);
    const pRows = rows.filter(r => r.pendingAmt > 0);
    const months = [];
    for (let i = -5; i <= 6; i++) { const d = new Date(now.getFullYear(), now.getMonth() + i, 1); months.push(MNAMES[d.getMonth()] + ' ' + d.getFullYear()); }
    return {
      ok: true, monthLabel: MNAMES[sel] + ' ' + selYear, openDateLabel: dmy(new Date(selYear, sel, 1)), months,
      kpis: {
        totLive: sum(r => r.live), totInward: sum(r => r.inward), totTotal: sum(r => r.total), totTarget, totDisp,
        totDispAmt: sum(r => r.dispatch * r.saleRate), totPendQ: totTarget - totDisp, totPendAmt,
        avgPendAmt: pRows.length ? Math.round(totPendAmt / pRows.length) : 0, totAch: totTarget ? Math.round(totDisp / totTarget * 100) : 0
      },
      rows, updatedAt: dmy(now) + ' 10:30 am'
    };
  }
  const PIPE = buildPipeline(null);

  // ── Stock snapshots ──
  function snapshots(type) {
    const src = type === 'rm' ? RM : FG;
    const key = dmy(TODAY);
    return {
      ok: true, dates: [key],
      products: src.ims.map(x => ({ name: x.item, sku: x.skuCode, category: x.category, unit: x.unit, maxLevel: x.maxLevel, closing: x.closing, cost: x.cost, value: x.value, availPct: x.availPct || 0, [key]: x.closing }))
    };
  }

  // ── Forecast (customer × product monthly qty) ──
  const FORECAST = (() => {
    const months8 = []; for (let i = 7; i >= 0; i--) months8.push(monKey(TODAY.getFullYear(), TODAY.getMonth() - i));
    const list = months8.slice(2);
    const rows = [];
    for (const c of CUSTOMERS) {
      const prods = new Set(); const nP = ri(2, 6);
      while (prods.size < nP) prods.add(pick(allFgItems));
      for (const p of prods) {
        const base = ri(10, 250), growth = rf(-0.08, 0.1), rate = round(p.cost ? p.cost * 1.3 : 2500);
        const row = { customer: c, product: p.item, category: p.category, salesRep: pick(REPS), rate };
        const qs = months8.map((mk, i) => { const q = rnd() < 0.15 ? 0 : Math.max(0, Math.round(base * (1 + growth * i) * rf(0.75, 1.25))); row[mk] = q; row[mk + '_a'] = Math.round(q * rate); return q; });
        const last6 = qs.slice(2), nz = last6.filter(q => q > 0);
        const avg = nz.length ? nz.reduce((a, b) => a + b, 0) / nz.length : 0;
        const first = last6.slice(0, 3).reduce((a, b) => a + b, 0) / 3, second = last6.slice(3).reduce((a, b) => a + b, 0) / 3;
        const trend = first > 0 && second > first * 1.15 ? 'growing' : first > 0 && second < first * 0.85 ? 'declining' : 'stable';
        let forecast = Math.round(avg); if (trend === 'growing') forecast = Math.round(forecast * 1.1); if (trend === 'declining') forecast = Math.round(forecast * 0.9);
        Object.assign(row, { forecast, trend, avgMonthlyQty: Math.round(avg) });
        rows.push(row);
      }
    }
    return { ok: true, rows, months: { list, m1: list[5], m2: list[4], m3: list[3], forecastMonth: monKey(TODAY.getFullYear(), TODAY.getMonth() + 1) }, allMonths: months8 };
  })();

  // ── Production rows (last 45 days) ──
  const PROD = (() => {
    const rows = [];
    const depts = ['Selection', 'Automatic', 'Cutlery', 'Packing'];
    for (let d = 44; d >= 0; d--) {
      const day = addDays(TODAY, -d);
      if (day.getDay() === 0) continue;
      for (const dept of depts) for (const shift of ['Day', 'Night']) {
        const input = ri(300, 1400), wastage = round(input * rf(0.02, 0.09), 1);
        rows.push({ dept, date: iso(day), ts_in: dmy(day) + ' 09:00', ts_out: dmy(day) + ' 18:00', grn: 'GRN-' + ri(1000, 9999), product: pick(allFgItems).item.slice(0, 18),
          input_kg: input, output_kg: round(input - wastage, 1), wastage_kg: wastage, shift, machine: '', pcs: input * ri(80, 140), cartons: ri(10, 80), labour: ri(4, 14), status: 'Completed' });
      }
    }
    return { ok: true, rows, count: rows.length, updated: iso(TODAY) };
  })();

  // ── Overview (built from the data above) ──
  const OVERVIEW = (() => {
    const sum = (a, f) => a.reduce((s, x) => s + f(x), 0);
    const fgValue = sum(FG.ims, x => x.value), rmValue = sum(RM.ims, x => x.value);
    const overdueInv = OS.invoices.filter(x => x.daysOver > 0);
    const buckets = { '0-30': 0, '31-60': 0, '61-90': 0, '90+': 0, notdue: 0, advance: 0 }, bucketAmt = { '0-30': 0, '31-60': 0, '61-90': 0, '90+': 0 };
    OS.invoices.forEach(x => { buckets[x.bucket]++; if (bucketAmt[x.bucket] !== undefined) bucketAmt[x.bucket] += x.amount; });
    const topOs = overdueInv.slice().sort((a, b) => b.amount - a.amount).slice(0, 5).map(x => ({ cust: x.customer, amt: x.amount, bucket: x.bucket, daysOver: x.daysOver }));
    const poOver = PO.orders.filter(o => o.isOverdue);
    const days = []; for (let d = 6; d >= 0; d--) { const k = iso(addDays(TODAY, -d)); const r = PROD.rows.filter(x => x.date === k); const inp = sum(r, x => x.input_kg); days.push({ date: k, input: inp, wastePct: inp ? round(sum(r, x => x.wastage_kg) / inp * 100, 1) : 0 }); }
    const todayRows = PROD.rows.filter(x => x.date === iso(TODAY));
    const depts = ['Selection', 'Automatic', 'Cutlery', 'Packing'].map(dept => { const r = PROD.rows.filter(x => x.dept === dept && x.date >= days[0].date); const inp = sum(r, x => x.input_kg); return { dept, input: inp, wastePct: inp ? round(sum(r, x => x.wastage_kg) / inp * 100, 1) : 0 }; });
    const sale = 18450000, cost = 14280000;
    const scores = {
      stock: { score: -12, label: 'Stock', icon: '📦' }, os: { score: -24, label: 'OS Ageing', icon: '📊' },
      po: { score: -18, label: 'Pending Orders', icon: '🕐' }, production: { score: -6, label: 'Production', icon: '🏭' },
      grossMargin: { score: 0, label: 'Gross Margin', icon: '💰' }, pipeline: { score: -15, label: 'Sales Pipeline', icon: '📈' }
    };
    return {
      ok: true, curMon: MSHORT[TODAY.getMonth()] + ' ' + TODAY.getFullYear(),
      overall: Math.round(Object.values(scores).reduce((s, d) => s + d.score, 0) / 6), scores,
      stock: { fgValue: Math.round(fgValue), rmValue: Math.round(rmValue), deadCount: FG.dead.length, missingCost: FG.ims.filter(x => !x.cost).length, lowStock: FG.ims.filter(x => x.availPct < 20).length, totalFG: FG.ims.length },
      os: { total: sum(OS.invoices, x => x.amount), overdue: sum(overdueInv, x => x.amount), count: overdueInv.length, buckets, bucketAmt, os90plus: bucketAmt['90+'], top: topOs },
      po: { total: Math.round(sum(PO.orders, o => o.pendingAmt)), count: PO.orders.length, overdue: poOver.length, overdueAmt: Math.round(sum(poOver, o => o.pendingAmt)),
        top: PO.orders.slice().sort((a, b) => b.pendingAmt - a.pendingAmt).slice(0, 5).map(o => ({ cust: o.customer, prod: o.product, amt: o.pendingAmt, days: Math.max(0, Math.round((TODAY - new Date(o.plannedDate.split('/').reverse().join('-'))) / 86400000)) })) },
      production: { todayInput: sum(todayRows, x => x.input_kg), todayWaste: sum(todayRows, x => x.wastage_kg), todayPcs: sum(todayRows, x => x.pcs), depts, days },
      grossMargin: { sale, cost, margin: sale - cost, pct: round((sale - cost) / sale * 100, 1), topCusts: CUSTOMERS.slice(0, 5).map(name => ({ name, margin: ri(180000, 650000) })) },
      pipeline: { live: PIPE.kpis.totLive, pendAmt: PIPE.kpis.totPendAmt, disp: PIPE.kpis.totDisp, ach: PIPE.kpis.totAch, target: PIPE.kpis.totTarget }
    };
  })();

  function customerHistory(name, months) {
    const q = (name || '').toLowerCase();
    const custs = CUSTOMERS.filter(c => c.toLowerCase().includes(q));
    if (!q || !custs.length) return { ok: true, found: false, custQ: name, months };
    const monthly = []; let gs = 0, gc = 0, gq = 0;
    for (let i = (+months || 6) - 1; i >= 0; i--) {
      const d = new Date(TODAY.getFullYear(), TODAY.getMonth() - i, 1);
      const sale = ri(150000, 900000), c = Math.round(sale * rf(0.68, 0.82)), qty = ri(80, 600);
      gs += sale; gc += c; gq += qty;
      monthly.push({ mon: MSHORT[d.getMonth()] + ' ' + d.getFullYear(), sale, cost: c, qty, margin: sale - c, pct: round((sale - c) / sale * 100, 1) });
    }
    const products = FG.ims.slice(0, 6).map(p => ({ name: p.item, sale: ri(50000, 400000), qty: ri(20, 200), cost: ri(30000, 280000) }));
    return { ok: true, found: true, customers: custs, months, total: { sale: gs, cost: gc, qty: gq, margin: gs - gc, pct: round((gs - gc) / gs * 100, 1) }, monthly, products };
  }

  const CHAT_REPLY = '🧪 **Demo mode** — the AI assistant is switched off in this public demo, so I can\'t answer free-form questions here.\n\n' +
    'In the real system this assistant reads the live business summary and answers questions like *"Which customers are 90+ days overdue?"* using an LLM.\n\n' +
    '💡 Try typing **"report"** to see the built-in business report on the demo data.';

  // ── Route table ──
  function route(url, opts) {
    const u = new URL(url, location.origin);
    const p = u.pathname.replace(/^.*\/api\//, '');
    const q = k => u.searchParams.get(k);
    switch (p) {
      case 'overview': return OVERVIEW;
      case 'fg': return FG;
      case 'rm': return RM;
      case 'os': return OS;
      case 'po': return PO;
      case 'hold-orders': return HOLD;
      case 'pipeline': return q('month') ? buildPipeline(q('month')) : PIPE;
      case 'stock-snapshots': return snapshots(q('type'));
      case 'forecast': return FORECAST;
      case 'production': return PROD;
      case 'customer-history': return customerHistory(q('name'), q('months'));
      case 'chat': return { ok: true, answer: CHAT_REPLY };
      case 'ping': return { ok: true, t: Date.now() };
      default: return { ok: false, error: 'This part is not included in the public demo.' };
    }
  }

  const realFetch = window.fetch.bind(window);
  window.fetch = function (input, opts) {
    const url = typeof input === 'string' ? input : input.url;
    if (/^\/api\//.test(url) || url.includes('/api/')) {
      const body = JSON.stringify(route(url, opts));
      return new Promise(res => setTimeout(() => res(new Response(body, { status: 200, headers: { 'Content-Type': 'application/json' } })), 250));
    }
    return realFetch(input, opts);
  };
})();
