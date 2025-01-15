import Image from 'next/image';
import Link from 'next/link';

const Card = ({ label, link, imageSrc }: {label: string, link: string, imageSrc: string}) => {
    return (
        <div className="hover:border-blue-600 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={link}>
                <div className="relative w-full h-48">
                    <Image 
                        src={imageSrc} 
                        alt={label} 
                        layout="fill" 
                        objectFit="" 
                        className="rounded-t-lg p-4"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-300">{label}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Card;
