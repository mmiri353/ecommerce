<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            ['name' => 'Laptop', 'price' => 1200, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Shirt', 'price' => 25.5, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Sofa', 'price' => 300, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Basketball', 'price' => 15.75, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
