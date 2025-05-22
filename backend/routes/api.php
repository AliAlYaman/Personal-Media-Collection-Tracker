<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/ai/recommend', function (Request $request) {
    $titles = $request->input('titles');
    
    $response = Http::withToken(env('OPENAI_API_KEY'))
        ->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-4',
            'messages' => [
                [
                    'role' => 'user',
                    'content' => "Based on these titles: " . implode(", ", $titles) . ". Recommend 3 similar media items (games, movies, or music) with title, type, and a 1-sentence description.",
                ],
            ],
        ]);

    return $response->json();
});
