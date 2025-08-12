<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         User::factory(40)->create()->each(function ($user) {
             $imageNo = $user->id + 30;
             $user->update([
                 'profile_photo' => "https://picsum.photos/id/$imageNo/200/300",
             ]);
         });

        User::factory()->create([
            'username' => 'shanto1234',
            'name' => 'Md Shanto Hossain',
            'email' => 'shanto@gmail.com',
            'password' => password_hash('password', PASSWORD_DEFAULT),
            'profile_photo' => "https://picsum.photos/id/64/200/300",
        ]);
    }
}
