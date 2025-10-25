const Home = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-[calc(100vh-20rem)]">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">Welcome</h2>
        <p className="text-muted-foreground text-xl md:text-2xl mb-4">Welcome to Pinger Software</p>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We specialize in creating innovative software solutions including advanced scheduling systems, 
          customer relationship management tools, and comprehensive tracking solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;
