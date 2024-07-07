import { Card, CardHeader, CardContent } from '@/components/ui/card';
const HeroCard = ({ icon, heading, description }) => {
  return (
    <Card>
      <CardContent>
        <div>
          <div></div>
          <div>
            <h3>{heading}</h3>
            <p>{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
