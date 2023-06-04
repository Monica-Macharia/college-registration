<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CollegesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colleges = [
            [
             'name' => 'Rust',
             'tutor_name' => 'Doe',
             'hours_total' => 60,
            ]
         ];
        
        
         DB::table('colleges')->insert($colleges);
    }
}
