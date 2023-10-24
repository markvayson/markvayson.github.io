import Image from "next/image";
import Link from "next/link";
const Social = ({ url, provider }: { url: string; provider: string }) => {
  return (
    <div className="h-fit w-fit  transition md:hover:scale-125">
      <Link target="_blank" className="flex items-center gap-2" href={url}>
        <Image
          alt={provider}
          width={35}
          height={35}
          src={`/assets/socials/${provider}.png`}
        />
        {provider}
      </Link>
    </div>
  );
};

export default Social;
