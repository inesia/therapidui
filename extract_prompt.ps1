$content = Get-Content 'C:\Users\irwan\.gemini\antigravity-ide\brain\a231821e-1a7c-4b57-a60a-b0a495321ced\.system_generated\logs\transcript_full.jsonl'
$lastUserInput = $content | ConvertFrom-Json | Where-Object { $_.type -eq 'USER_INPUT' } | Select-Object -Last 1
$lastUserInput.content | Out-File 'C:\xampp\htdocs\inesia.dev\user_prompt.txt' -Encoding utf8
