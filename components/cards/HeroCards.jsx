import { Card, CardHeader, CardContent } from '@/components/ui/card';
const HeroCard = ({ icon, heading, description }) => {
  return (
    <Card className='max-w-[700px]'>
      <CardContent className='p-4 flex'>
        <div className='flex gap-4'>
          <div className='bg-dashSides p-4 rounded-sm min-w-[45px]'></div>
          <div className='flex flex-col items-start gap-1'>
            <h3 className='font-semibold text-lg'>{heading}</h3>
            <p className='text-left text-sm text-dashtext'>{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
