import { Card, CardHeader, CardContent } from '@/components/ui/card';

const BulletCard = ({ feature, description, isLast }) => {
  return (
    <Card
      className={`dark:bg-transparent dark:border-none text-white shadow-none flex items-start max-w-[770px] mx-auto px-4 ${
        isLast ? 'last-item' : ''
      }`}
    >
      <div
        className='min-w-3 min-h-3 rounded-full bg-accentY mt-4'
        style={{ boxShadow: '0 0 15px rgba(255, 205, 50, 0.7)' }}
      ></div>
      <div className='text-left max-w-[500px]'>
        <CardHeader className='text-2xl pt-0 mt-0 font-semibold pb-4'>
          {feature}
        </CardHeader>
        <CardContent className='text-dashtext'>{description}</CardContent>
      </div>
    </Card>
  );
};

export default BulletCard;
