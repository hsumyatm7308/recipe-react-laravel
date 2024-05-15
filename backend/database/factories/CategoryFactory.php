<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $usedCategoryNames = [];

    public function definition(): array
    {
        $categoryNames = [
            'အားလုံး',
            'ရိုးရာအစားအစာ',
            'မြန်မာအစားအစာ',
            'တရုတ်အစားအစာ',
            'အရွက်',
            'မြန်မာသရေစာမုန့်များ',
            'ပီဇာ၊ကိတ်နှင့်မုန့်',
            'ဖျော်ရည်များ',
            'ကိုရီးယားအစားအစာ',
            'ထိုင်းရိုးရာအစားအစာ',
            'ဉရောပအစားအစာ',
        ];
        $categoryName = $this->getuniqueCategoryname($categoryNames);
        return [
            'name' => $categoryName,
            'user_id' => 1
        ];
    }

    /**
     * Get a unique category name.
     *
     * @param array $categoryNames
     * @return string
     */
    protected function getUniqueCategoryName($categoryNames)
    {
        do {
            $categoryName = $categoryNames[array_rand($categoryNames)];
        } while (in_array($categoryName, $this->usedCategoryNames));

        $this->usedCategoryNames[] = $categoryName;

        return $categoryName;
    }

}
