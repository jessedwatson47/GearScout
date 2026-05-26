import BioSection from "./UserProfile/BioSection";

import {useEffect, useState} from "react";

function TestPage() {
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5234/api/users");
        console.log("Response", res);
        const result = await res.json();
        console.log("Result", result);
        setTestData(result);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section className="h-[calc(100vh-64px)]">
      {/* {testData.map((tester) => (
        <div className="w-1/2">
          <BioSection key={tester.id} username={tester.username} img={tester.imageUrl} type={tester.class} country={tester.country} gripType={tester.gripType} padType={tester.padType} age={tester.age} topGenre={tester.topGenre} />
        </div>
      ))} */}
      ;
    </section>
  );
}

export default TestPage;
