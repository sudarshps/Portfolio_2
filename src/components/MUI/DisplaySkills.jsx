import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function LogoSection6() {
  return (
    <section className="mt-10">
      <div className="container text-center place-content-center grid">
        {/* <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base"
        >
          More than 50+ brands trust us
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl"
        >
          Trusted by Leading Brands
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-5xl !text-gray-500 lg:px-8 mb-10"
        >
          From innovative startups to Fortune 500 companies, our client list spans a spectrum of 
          sectors, each with unique challenges that we&apos;ve successfully navigated.
        </Typography> */}
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://www.material-tailwind.com/logos/logo-coinbase.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  coinbase.com
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://www.material-tailwind.com/logos/logo-amazon.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  amazon.com
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <CardBody className="text-center">
              <img
                src="https://www.material-tailwind.com/logos/logo-netflix.svg"
                alt="logo"
                className="w-40 mx-auto"
              />
              <Typography variant="small" className="font-normal text-gray-500 mb-4">
              netflix.com
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal lg:max-w-[16rem]">
              &quot;It have broadened our horizons and helped me advance my career. The community is incredibly supportive &quot;
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
          <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://www.material-tailwind.com/logos/logo-spotify.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  spotify.com
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="https://www.material-tailwind.com/logos/logo-google.svg"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="font-normal text-gray-500">
                  google.com
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Button className="mt-6 mx-auto flex" variant="outlined">see all projects</Button>
    </section>
  );
}

export default LogoSection6;