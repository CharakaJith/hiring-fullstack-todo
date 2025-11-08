import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col justify-end items-center">
      {/* background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(/src/assets/images/notfound.webp)` }} />

      {/* button */}
      <div className="relative z-10 mb-15">
        <Button className="bg-blue-800 hover:bg-blue-950 cursor-pointer text-xl py-5 px-6" onClick={handleGoBack}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
