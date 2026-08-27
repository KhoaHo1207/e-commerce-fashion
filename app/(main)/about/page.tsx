import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Contents */}
        <div>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>

          <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">
            Timeless Fashion for Every Occasion
          </h2>

          <p className="text-muted-foreground mt-6 leading-8">
            At Fashion., we believe great style should be effortless. Our
            collections are thoughtfully designed with premium fabrics and
            modern trends to help you look and feel your best every day.
          </p>

          <p className="text-muted-foreground mt-6 leading-8">
            Whether you&apos;re shopping for everyday essentials or statement
            pieces, we&apos;re committed to delivering quality, comfort, and
            exceptional customer service.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-primary text-3xl font-bold">20k+</h3>
              <p className="text-muted-foreground mt-1">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-primary text-3xl font-bold">500k+</h3>
              <p className="text-muted-foreground mt-1">Premium Products</p>
            </div>
          </div>
        </div>

        {/* Right Contents */}
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={"/about.png"}
            alt="About Fashion"
            width={700}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
