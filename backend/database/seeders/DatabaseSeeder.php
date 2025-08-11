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
                 'profile_photo_path' => "https://picsum.photos/id/$imageNo/200/300",
             ]);
         });

        User::factory()->create([
            'username' => 'testuser',
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => password_hash('password', PASSWORD_DEFAULT),
            'profile_photo_path' => "https://picsum.photos/id/64/200/300",
        ]);
    }
}
