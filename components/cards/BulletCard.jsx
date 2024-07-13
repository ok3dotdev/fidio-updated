import { Card, CardHeader, CardContent } from '@/components/ui/card';

const BulletCard = ({ feature, description, isLast }) => {
  return (
    <Card
      className={`dark:bg-transparent dark:border-none shadow-none flex items-center font-lexend max-w-[770px] mx-auto px-4 ${
        isLast ? 'last-item' : ''
      }`}
    >
      <div className='w-2 h-2 rounded bg-accentY'></div>
      <div>
        <CardHeader className='text-2xl pt-0 mt-0 font-semibold'>
          {feature}
        </CardHeader>
        <CardContent className='text-dashtext'>{description}</CardContent>
      </div>
    </Card>
  );
};

export default BulletCard;
