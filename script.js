document.addEventListener('DOMContentLoaded', function () {
    const shops = {
        "shop_ana": {
            name: "Ana Shop",
            isVerified: true,
            status: "Đã xác thực",
            type: "Cá nhân",
            joinDate: "01/01/2025",
            phone: "0123456789",
            zalo: "Zalo/Messenger/SMS",
            address: "Thạnh Mỹ, Quận 2, TP.HCM",
            allPostsUrl: "#",
            reputation: "GOLD"
        },
        "shop_boss": {
            name: "Fashion Boss",
            isVerified: false,
            status: "Mới",
            type: "Cá nhân",
            joinDate: "01/01/2025",
            phone: "0123456789",
            zalo: "Zalo/Messenger/SMS",
            address: "Thạnh Mỹ, Quận 2, TP.HCM", 
            allPostsUrl: "#",
            reputation: "GOLD"
        }
    };

    const products = [
        { id: 1, shopId: "shop_ana", discount: "50% OFF", quickViewCount: 120, postTitle: "Đầm dạ hội sang trọng", originalPrice: 1000000, promoPrice: 500000, location: "Quận 2, TP.HCM", rating: 5, reviewCount: 12, postTime: "Vừa đăng" },
        { id: 2, shopId: "shop_boss", discount: "20% OFF", quickViewCount: 85, postTitle: "Áo sơ mi nam công sở", originalPrice: 500000, promoPrice: 400000, location: "Quận 1, TP.HCM", rating: 4, reviewCount: 15, postTime: "1 giờ trước" },
        { id: 3, shopId: "shop_ana", discount: "30% OFF", quickViewCount: 45, postTitle: "Chân váy bút chì nữ", originalPrice: 300000, promoPrice: 210000, location: "Quận 2, TP.HCM", rating: 4.5, reviewCount: 8, postTime: "2 giờ trước" },
        { id: 4, shopId: "shop_boss", discount: "15% OFF", quickViewCount: 200, postTitle: "Quần tây nam chất liệu vải co giãn", originalPrice: 600000, promoPrice: 510000, location: "Quận 1, TP.HCM", rating: 5, reviewCount: 40, postTime: "3 giờ trước" },
        { id: 5, shopId: "shop_ana", discount: "40% OFF", quickViewCount: 60, postTitle: "Áo khoác len cardigan nữ", originalPrice: 450000, promoPrice: 270000, location: "Quận 7, TP.HCM", rating: 4, reviewCount: 5, postTime: "5 giờ trước" },
        { id: 6, shopId: "shop_boss", discount: "10% OFF", quickViewCount: 150, postTitle: "Giày da nam cao cấp", originalPrice: 1200000, promoPrice: 1080000, location: "Quận 1, TP.HCM", rating: 4.8, reviewCount: 22, postTime: "6 giờ trước" },
        { id: 7, shopId: "shop_ana", discount: "25% OFF", quickViewCount: 90, postTitle: "Túi xách cầm tay mini", originalPrice: 800000, promoPrice: 600000, location: "Quận 2, TP.HCM", rating: 4.2, reviewCount: 10, postTime: "8 giờ trước" },
        { id: 8, shopId: "shop_boss", discount: "50% OFF", quickViewCount: 300, postTitle: "Đồng hồ nam dây kim loại", originalPrice: 2000000, promoPrice: 1000000, location: "Bình Thạnh, TP.HCM", rating: 4.9, reviewCount: 65, postTime: "10 giờ trước" }
    ];

    const container = document.getElementById('product-list');

    const createProductCard = (p) => {
        const shop = shops[p.shopId];

        const verifiedHtml = shop.isVerified ? '<span class="verified-tick">✓</span>' : '';

        return `
        <div class="fashion-card">
            <div class="product-thumb">
                <img src="/assets/sanpham.jpg" alt="${p.postTitle}">
                <div class="discount-tag">${p.discount}</div>
            </div>

            <div class="product-details">
                <div class="shop-header">
                    <span class="shop-name">${shop.name}</span>
                    <span class="info-trigger">!</span>
                    
                    <div class="seller-info-popup">
    <div class="info-item"><span>Tình trạng:</span> <b>${shop.status} ${verifiedHtml}</b></div>
    <div class="info-item"><span>Tài khoản:</span> <b>${shop.type}</b></div>
    <div class="info-item"><span>Ngày tham gia:</span> <b>${shop.joinDate}</b></div>
    <div class="info-item"><span>Địa chỉ:</span> <b>${shop.address}</b></div>
    <div class="info-item"><span>SĐT:</span> <b>${shop.phone}</b></div>

    <div class="info-item">
        <span>Chat:</span>
        <div class="chat-group">
            <a href="#"><img src="/assets/zalo.png"></a>
            <a href="#"><img src="/assets/mess.png"></a>
            <a href="#"><img src="/assets/sms.png"></a>
        </div>
    </div>

    <a href="${shop.allPostsUrl}" class="all-posts-link">Tất cả bài đăng</a>

    <div class="info-item">
        <span>Hệ số uy tín:</span>
        <b class="${shop.reputation === 'GOLD' ? 'rep-gold' : 'rep-silver'}">${shop.reputation}</b>
    </div>

    <button class="follow-btn">Theo dõi</button>
</div>
                </div>

                <h3 class="post-title">${p.postTitle}</h3>
                <div class="price-box">
                    <span class="current-price">${p.promoPrice.toLocaleString('vi-VN')} đ</span>
                    <span class="old-price">${p.originalPrice.toLocaleString('vi-VN')} đ</span>
                </div>
            </div>
        </div>
    `;
    };

    container.innerHTML = products.map(createProductCard).join('');
});