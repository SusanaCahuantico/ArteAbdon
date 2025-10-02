  const CART_KEY = 'abd_cart_v1';
  let cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  let products = [];

  function saveCart(){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartUI();
  }

  function addToCart(productId, qty=1){
    const p = products.find(x=>x.id===productId);
    if(!p) return;
    const item = cart.find(i=>i.id===productId);
    if(item){
      item.qty += qty;
    } else {
      cart.push({id:productId, qty});
    }
    saveCart();
    showToast('Agregado al carrito');
  }

  function removeFromCart(productId){
    cart = cart.filter(i=>i.id!==productId);
    saveCart();
  }

  function clearCart(){cart=[]; saveCart();}

  function cartTotal(){
    return cart.reduce((acc,i)=>{
      const p = products.find(x=>x.id===i.id);
      return acc + (p.precio * i.qty);
    },0);
  }

  const productsGrid = document.getElementById('productsGrid');
  const filterCategory = document.getElementById('filterCategory');

  function renderProducts(filter='all'){
    productsGrid.innerHTML='';

    const list = products.filter(p=> filter==='all' ? true : p.categoria===filter);
    for(const p of list){
      const card = document.createElement('article');
      card.className = 'bg-white rounded-lg overflow-hidden shadow card-hover';
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-96 object-contain object-scale-down transition-transform duration-200" />
        <div class="p-3">
          <h4 class="font-semibold">${p.nombre}</h4>
          <p class="text-sm text-gray-600">${p.descripcion}</p>
          <p class="text-xs text-gray-400">Medidas: ${p.medidas}</p>
          <div class="mt-3 flex items-center justify-between">
            <div class="text-lg font-bold">S/ ${p.precio}</div>
            <div class="flex items-center gap-2">
              <button data-id="${p.id}" class="addBtn px-3 py-1 border rounded">Añadir</button>
            </div>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    }
    document.querySelectorAll('.addBtn').forEach(b=> b.addEventListener('click', e=> addToCart(parseInt(b.dataset.id))));
  }

  filterCategory.addEventListener('change', ()=> renderProducts(filterCategory.value));

  const cartDrawer = document.getElementById('cartDrawer');
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const checkoutWhatsapp = document.getElementById('checkoutWhatsapp');
  const clearCartBtn = document.getElementById('clearCart');

  cartBtn.addEventListener('click', ()=>{cartDrawer.classList.toggle('hidden')});
  clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')) clearCart(); });

  function updateCartUI(){
    cartCount.textContent = cart.reduce((a,i)=>a+i.qty,0);
    cartItems.innerHTML='';
    if(cart.length===0){
      cartItems.innerHTML = '<p class="text-sm text-gray-500">Carrito vacío</p>';
    } else {
      for(const it of cart){
        const p = products.find(x=>x.id===it.id);
        const div = document.createElement('div');
        div.className='flex items-center gap-3 py-2 border-b';
        div.innerHTML = `
          <img src="${p.imagen}" class="w-12 h-12 object-cover rounded" />
          <div class="flex-1">
            <div class="font-semibold">${p.nombre}</div>
            <div class="text-sm text-gray-600">S/ ${p.precio} x ${it.qty}</div>
          </div>
          <div class="text-right">
            <div class="font-semibold">S/ ${p.precio * it.qty}</div>
            <button data-id="${p.id}" class="removeBtn text-xs text-red-600 mt-1">Eliminar</button>
          </div>
        `;
        cartItems.appendChild(div);
      }
      document.querySelectorAll('.removeBtn').forEach(b=> b.addEventListener('click', e=> removeFromCart(parseInt(b.dataset.id))));
    }
    cartTotalEl.textContent = 'S/ ' + cartTotal();
  }

  checkoutWhatsapp.addEventListener('click', ()=>{
    if(cart.length===0) return alert('Tu carrito está vacío');
    const lines = cart.map(i=>{
      const p = products.find(x=>x.id===i.id);
      return `${p.nombre} - S/ ${p.precio} x ${i.qty} = S/ ${p.precio*i.qty}`;
    });
    lines.push('Total: S/ ' + cartTotal());
    const phone = '51998356687';
    const text = encodeURIComponent('Hola, quisiera comprar estas piezas:%0A' + lines.join('%0A') + '%0A%0ANombre:%0ATeléfono:%0ADirección:%0A');
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  });

  function showToast(msg){
    const t = document.createElement('div');
    t.textContent = msg;
    t.className='fixed right-6 bottom-24 bg-black/80 text-white px-4 py-2 rounded';
    document.body.appendChild(t);
    setTimeout(()=> t.remove(),1500);
  }

fetch('/products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts('all');
    updateCartUI();
  })
  .catch(err => console.error('Error cargando JSON:', err));
