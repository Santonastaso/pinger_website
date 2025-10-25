import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Dashboard = () => {
  return (
    <div className="w-full space-y-8">
      <div className="w-full">
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <p className="text-muted-foreground text-lg mt-2">
          Welcome to Pinger Software - Your trusted partner for innovative software solutions.
        </p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Explore our portfolio of software solutions and projects.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get in touch with us for your software development needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
