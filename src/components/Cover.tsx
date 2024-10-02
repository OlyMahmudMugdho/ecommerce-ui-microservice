import Image from "next/image";
import cover from "@/images/cover.jpg";

export default function Cover() {
    return (
        <section>
            <Image src={cover} alt="cover" />
            {/* 
            
            image link : 
            
            https://www.vecteezy.com/vector-art/4299835-online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-vector-illustration-search */}
        </section>
    );
}