import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('capturedImage') capturedImage!: ElementRef;
  cameraStarted = false;
  capturedImageDataUrl: string | null = null;

  constructor() {}

  startCamera() {
    // Get access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        // Attach the stream to the video element
        this.videoPlayer.nativeElement.srcObject = stream;
        this.cameraStarted = true;
      })
      .catch(error => {
        console.error('Error accessing the camera:', error);
      });
  }

  stopCamera() {
    // Stop the camera
    const videoStream = this.videoPlayer.nativeElement.srcObject as MediaStream;
    const tracks = videoStream.getTracks();

    tracks.forEach(track => {
      track.stop();
    });

    this.videoPlayer.nativeElement.srcObject = null;
    this.cameraStarted = false;
  }

  takePicture() {
    const context = this.canvas.nativeElement.getContext('2d')!;
    context.drawImage(this.videoPlayer.nativeElement, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    
    // Convert canvas image to data URL
    this.capturedImageDataUrl = this.canvas.nativeElement.toDataURL('image/png');
  }
}
