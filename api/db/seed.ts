import dataSource from './datasource';
import { NewsSeeder } from './news-seeder';

async function runSeeder() {
  try {
    await dataSource.initialize();
    const seeder = new NewsSeeder();
    await seeder.run(dataSource);
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await dataSource.destroy();
  }
}

runSeeder();
