import React from "react";
import fs from "fs/promises";

interface TestData {
  title: string;
  updated_at: string;
  labels: string[];
  author: {
    name: string;
    username: string;
  };
}

interface TestDataCollection {
  [key: string]: {
    data: string;
  };
}

const userIdMapping = {
  test1: "9619740",
  test2: "9619740",
};

const DeveloperDetails = async () => {
  const keys = Object.keys(userIdMapping);

  const file = await fs.readFile(
    process.cwd() + `/assets/${userIdMapping}.json`,
    "utf8"
  );
  const data = JSON.parse(file);

  for (const [testName, testData] of Object.entries(data)) {
    const test_data: TestData = JSON.parse(testData.data);
    const title: string = test_data.title;
    const updated_at: Date = new Date(test_data.updated_at);
    const formatted_date: string = updated_at.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const labels: string[] = test_data.labels;
    const dev_name: string = test_data.author.name;
    const username: string = test_data.author.username;

    console.log(`Test Name: ${testName}`);
    console.log(`Title: ${title}`);
    console.log(`Updated At: ${formatted_date}`);
    console.log(`Labels: ${labels}`);
    console.log(`Developer Name: ${dev_name}`);
    console.log(`Username: ${username}`);
    console.log("---");
  }

  return <div>DeveloperDetails</div>;
};

export default DeveloperDetails;
