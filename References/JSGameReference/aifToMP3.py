#!/usr/bin/env python3
import sys
import os
from pydub import AudioSegment

def convert_aif_to_mp3(aif_file, mp3_file=None):
    """
    Converts an .aif file to .mp3.
    
    Parameters:
        aif_file (str): Path to the input .aif file.
        mp3_file (str): Path to the output .mp3 file. If None, uses the same name with .mp3 extension.
    """
    if not os.path.isfile(aif_file):
        print(f"Error: File '{aif_file}' does not exist.")
        sys.exit(1)
        
    if mp3_file is None:
        base, _ = os.path.splitext(aif_file)
        mp3_file = base + ".mp3"
    
    try:
        # Load the audio file. pydub automatically uses ffmpeg under the hood.
        audio = AudioSegment.from_file(aif_file, format="aiff")
        
        # Export as mp3.
        audio.export(mp3_file, format="mp3")
        print(f"Successfully converted '{aif_file}' to '{mp3_file}'.")
    except Exception as e:
        print(f"Conversion failed: {e}")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python convert_aif_to_mp3.py input_file.aif [output_file.mp3]")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    convert_aif_to_mp3(input_file, output_file)
