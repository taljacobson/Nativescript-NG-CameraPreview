"use strict";
var core_1 = require("@angular/core");
var placeholder_1 = require("ui/placeholder");
var page_1 = require("ui/page");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var platformModule = require("platform");
var application = require("application");
var fs = require("file-system");
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera(page, routerExtensions) {
        var _this = _super.call(this) || this;
        _this.page = page;
        _this.routerExtensions = routerExtensions;
        //public args: placeholder.CreateViewEventData;
        //public output;
        _this.init = false;
        _this.closeCamera = function () {
            classesRef.mCameraDevice.close();
            classesRef.mCameraDevice = null;
            classesRef.mCameraOpenCloseLock.release();
        };
        _this.checkCamera = function () {
            var isActive;
            if (classesRef.mCameraDevice == null) {
                isActive = false;
            }
            else {
                isActive = true;
            }
            return isActive;
        };
        //public takeVideo = () => {
        //    var mMediaRecorder = new MediaRecorder();
        //    //android.content.Intent takeVideoIntent = new android.content.Intent(MediaStore.ACTION_VIDEO_CAPTURE);
        //    //if (takeVideoIntent.resolveActivity(getPackageManager()) != null) {
        //    //    startActivityForResult(takeVideoIntent, classesRef.REQUEST_VIDEO_CAPTURE);
        //    //}
        //}
        _this.test = function () {
        };
        _this.takeVideo = function (Intent) {
            classesRef.mMediaRecorder.setAudioSource(android.media.MediaRecorder.AudioSource.MIC);
            classesRef.mMediaRecorder.setVideoSource(android.media.MediaRecorder.VideoSource.SURFACE);
            classesRef.mMediaRecorder.setOutputFormat(android.media.MediaRecorder.OutputFormat.MPEG_4);
            classesRef.mMediaRecorder.setOutputFile(classesRef.mNextVideoAbsolutePath);
            classesRef.mMediaRecorder.setVideoEncodingBitRate(10000000);
            classesRef.mMediaRecorder.setVideoFrameRate(30);
            classesRef.mMediaRecorder.setVideoSize(_this.width, _this.height);
            classesRef.mMediaRecorder.setVideoEncoder(android.media.MediaRecorder.VideoEncoder.H264);
            classesRef.mMediaRecorder.setAudioEncoder(android.media.MediaRecorder.AudioEncoder.AAC);
            //classesRef.mMediaRecorder.prepare();
            // Set up Surface for the MediaRecorder
            classesRef.mRecorderSurface = classesRef.mMediaRecorder.getSurface();
            classesRef.surfaces.add(classesRef.mRecorderSurface);
            classesRef.mPreviewBuilder.addTarget(classesRef.mRecorderSurface);
            //let intent = new android.content.Intent(android.provider.MediaStore.ACTION_VIDEO_CAPTURE);
            //console.log(intent.resolveActivity(app.android.currentContext.getPackageManager()))
            //if (intent.resolveActivity(app.android.currentContext.getPackageManager()) != null) {
            //    app.android.currentContext.startActivityForResult(intent, classesRef.REQUEST_VIDEO_CAPTURE);
            //}
            //record(options: any): Promise < any > {
            //    return new Promise((resolve, reject) => {
            //options = options || {}
            //let data = null
            //let file;
            //options.size = options.size || 0;
            //options.hd = options.hd ? 1 : 0;
            //options.saveToGallery = options.saveToGallery || false;
            //options.duration = options.duration || 0;
            //options.explanation = options.explanation = "";
            //let startRecording = () => {
            //    let intent = new android.content.Intent(android.provider.MediaStore.ACTION_VIDEO_CAPTURE);
            //    intent.putExtra(android.provider.MediaStore.EXTRA_VIDEO_QUALITY, options.hd);
            //    if (options.size > 0) {
            //        intent.putExtra(android.provider.MediaStore.EXTRA_SIZE_LIMIT, options.size * 1024 * 1024);
            //    }
            //    if (!options.saveToGallery) {
            //        file = new java.io.File(app.android.context.getFilesDir(), "videoCapture_" + +new Date() + ".mp4");
            //        intent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, android.net.Uri.fromFile(file))
            //    } else {
            //        file = new java.io.File(android.os.Environment.getExternalStoragePublicDirectory(
            //            android.os.Environment.DIRECTORY_MOVIES).getAbsolutePath() + "/" + "videoCapture_" + +new Date() + ".mp4");
            //        intent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, android.net.Uri.fromFile(file))
            //    }
            //    if (options.duration > 0) {
            //        intent.putExtra(android.provider.MediaStore.EXTRA_DURATION_LIMIT, options.duration);
            //    }
            //    if (intent.resolveActivity(app.android.currentContext.getPackageManager()) != null) {
            //        app.android.currentContext.startActivityForResult(intent, classesRef.REQUEST_VIDEO_CAPTURE);
            //        app.android.on(app.AndroidApplication.activityResultEvent, (args: app.AndroidActivityResultEventData) => {
            //            if (args.requestCode === classesRef.REQUEST_VIDEO_CAPTURE && args.resultCode === classesRef.RESULT_OK) {
            //                if (options.saveToGallery) {
            //                    resolve({ file: file.toString() });
            //                } else {
            //                    resolve({ file: file.toString() });
            //                }
            //            } else if (args.resultCode === classesRef.RESULT_CANCELED) {
            //                reject({ event: 'cancelled' })
            //            } else {
            //                reject({ event: 'failed' })
            //            }
            //        })
            //    } else {
            //        reject({ event: 'failed' })
            //    }
            //}
            //if (classesRef.currentapiVersion >= classesRef.MARSHMALLOW) {
            //    if (options.explanation.length > 0) {
            //        permissions.requestPermission(android.Manifest.permission.CAMERA, options.explanation)
            //            .then(function () {
            //                startRecording();
            //            })
            //            .catch(function () {
            //                reject({ event: 'camera permission needed' })
            //            });
            //    } else {
            //        permissions.requestPermission(android.Manifest.permission.CAMERA)
            //            .then(function () {
            //                startRecording();
            //            })
            //            .catch(function () {
            //                reject({ event: 'camera permission needed' })
            //            });
            //    }
            //}
            //else {
            //    startRecording()
            //}
            //    })
            //}
        };
        _this.onSurfaceTextureDestroyed = function (texture) {
            // console.log("onSurfaceTextureDestroyed");
            return true;
        };
        _this.onSurfaceTextureUpdated = function (texture) {
            console.log("onSurfaceTexturUpdated");
        };
        _this.onLoaded = function (args) {
            console.log('1');
            _this.page = args.object;
        };
        _this.onTakeShot = function (args) {
            console.log('2');
            //if (classesRef.app.ios) {
            //    var videoConnection = classesRef.output.connections[0];
            //    classesRef.output.captureStillImageAsynchronouslyFromConnectionCompletionHandler(videoConnection, function (buffer, error) {
            //        var imageData = AVCaptureStillImageOutput.jpegStillImageNSDataRepresentation(buffer);
            //        var image = UIImage.imageWithData(imageData);
            //        UIImageWriteToSavedPhotosAlbum(image, null, null, null);
            //        AudioServicesPlaySystemSound(144);
            //    });
            //}
            //else
            if (classesRef.app.android) {
                console.log("onTakeShot");
                _this.lockFocus();
            }
        };
        _this.lockFocus = function () {
            console.log("lockFocus");
            classesRef.mState = classesRef.STATE_WAITING_LOCK;
            classesRef.mCaptureSession.capture(classesRef.mPreviewRequestBuilder.build(), classesRef.mCaptureCallback, classesRef.mBackgroundHandler);
            console.log(classesRef.mCaptureSession.capture(classesRef.mPreviewRequestBuilder.build(), classesRef.mCaptureCallback, classesRef.mBackgroundHandler));
            //this.captureStillPicture();
        };
        _this.runPrecaptureSequence = function () {
            console.log('3');
            // This is how to tell the camera to trigger. 
            classesRef.mPreviewRequestBuilder.set(android.hardware.camera2.CaptureRequest.CONTROL_AE_PRECAPTURE_TRIGGER, android.hardware.camera2.CaptureRequest.CONTROL_AE_PRECAPTURE_TRIGGER_START);
            // Tell #mCaptureCallback to wait for the precapture sequence to be set.
            classesRef.mState = classesRef.STATE_WAITING_PRECAPTURE;
            classesRef.mCaptureSession.capture(classesRef.mPreviewRequestBuilder.build(), classesRef.mCaptureCallback, classesRef.mBackgroundHandler);
        };
        _this.captureStillPicture = function () {
            console.log('4');
            console.log('captureStillPicture');
            // This is the CaptureRequest.Builder that we use to take a picture.
            var captureBuilder = classesRef.mCameraDevice.createCaptureRequest(android.hardware.camera2.CameraDevice.TEMPLATE_STILL_CAPTURE);
            captureBuilder.addTarget(classesRef.mImageReader.getSurface());
            // Use the same AE and AF modes as the preview.
            captureBuilder.set(android.hardware.camera2.CaptureRequest.CONTROL_AF_MODE_AUTO, android.hardware.camera2.CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_PICTURE);
            classesRef.setAutoFlash(captureBuilder);
            var CaptureCallback = android.hardware.camera2.CameraCaptureSession.CaptureCallback.extend({
                onCaptureCompleted: function (session, request, result) {
                    console.log("onCaptureCompleted");
                    console.log(result.toString());
                }
            });
            classesRef.mCaptureSession.stopRepeating();
            classesRef.mCaptureSession.capture(captureBuilder.build(), CaptureCallback, null);
        };
        _this.onCreatingView = function (args) {
            console.log('6');
            //if (classesRef.app.ios) {
            //    var session = new AVCaptureSession();
            //    session.sessionPreset = AVCaptureSessionPreset1280x720;
            //    // Adding capture device
            //    var device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo);
            //    var input = AVCaptureDeviceInput.deviceInputWithDeviceError(device);
            //    if (!input) {
            //        throw new Error("Error trying to open camera.");
            //    }
            //    session.addInput(input);
            //    classesRef.output = new AVCaptureStillImageOutput();
            //    session.addOutput(classesRef.output);
            //    session.startRunning();
            //    var videoLayer = AVCaptureVideoPreviewLayer.layerWithSession(session);
            //    var view = UIView.alloc().initWithFrame({ origin: { x: 0, y: 0 }, size: { width: 400, height: 600 } });
            //    videoLayer.frame = view.bounds;
            //    view.layer.addSublayer(videoLayer);
            //    args.view = view;
            //}
            //else
            if (classesRef.app.android) {
                var appContext = classesRef.app.android.context;
                var cameraManager = appContext.getSystemService(android.content.Context.CAMERA_SERVICE);
                var cameras = cameraManager.getCameraIdList();
                for (var index = 0; index < cameras.length; index++) {
                    var currentCamera = cameras[index];
                    var currentCameraSpecs = cameraManager.getCameraCharacteristics(currentCamera);
                    // get available lenses and set the camera-type (front or back)
                    var facing = currentCameraSpecs.get(android.hardware.camera2.CameraCharacteristics.LENS_FACING);
                    if (facing !== null && facing == android.hardware.camera2.CameraCharacteristics.LENS_FACING_FRONT) {
                        console.log("FRONT camera, was back");
                        _this.onLoaded(args);
                        classesRef.mCameraId = currentCamera;
                    }
                    // get all available sizes and set the format
                    var map = currentCameraSpecs.get(android.hardware.camera2.CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
                    var format = map.getOutputSizes(android.graphics.ImageFormat.JPEG);
                    console.log("---Format:--- " + format + " " + format.length + " " + format[4]);
                    // we are taking not the largest possible but some of the 5th in the list of resolutions
                    if (format && format !== null) {
                        console.log('Formattt----', format[0]);
                        var dimensions = format[5].toString().split('x');
                        var largestWidth = +dimensions[0];
                        var largestHeight = +dimensions[1];
                        // set the output image characteristics
                        classesRef.mImageReader = new android.media.ImageReader.newInstance(largestWidth, largestHeight, android.graphics.ImageFormat.JPEG, /*maxImages*/ 2);
                        classesRef.mImageReader.setOnImageAvailableListener(_this.mOnImageAvailableListener, classesRef.mBackgroundHandler);
                    }
                }
                classesRef.mStateCallBack = new _this.MyStateCallback();
                //API 23 runtime permission check
                if (android.os.Build.VERSION.SDK_INT > android.os.Build.VERSION_CODES.LOLLIPOP) {
                    console.log("checking presmisions ....");
                    if (android.support.v4.content.ContextCompat.checkSelfPermission(appContext, android.Manifest.permission.CAMERA) == android.content.pm.PackageManager.PERMISSION_GRANTED) {
                        console.log("Permison already granted!!!!!");
                        cameraManager.openCamera(classesRef.mCameraId, classesRef.mStateCallBack, classesRef.mBackgroundHandler);
                    }
                    else if (android.support.v4.content.ContextCompat.checkSelfPermission(appContext, android.Manifest.permission.CAMERA) == android.content.pm.PackageManager.PERMISSION_DENIED) {
                        console.log("NO PERMISIONS - about to try get them!!!"); // I am crashing here - wrong reference for shouldShowRequestPermissionRationale !?
                    }
                }
                else {
                    cameraManager.openCamera(classesRef.mCameraId, classesRef.mStateCallBack, classesRef.mBackgroundHandler);
                }
                // cameraManager.openCamera(mCameraId, mStateCallBack, mBackgroundHandler);
                classesRef.mTextureView = new android.view.TextureView(classesRef.app.android.context);
                classesRef.mTextureView.setSurfaceTextureListener(_this.mSurfaceTextureListener);
                args.view = classesRef.mTextureView;
                //args.view.setAlpha(0.5); // make the camera view translucent
                console.log('-----', args.view);
            }
        };
        // from Java ; public static abstract class
        _this.MyCameraCaptureSessionStateCallback = android.hardware.camera2.CameraCaptureSession.StateCallback.extend({
            onConfigured: function (cameraCaptureSession) {
                console.log("onConfigured " + cameraCaptureSession);
                console.log('7');
                if (classesRef.mCameraDevice === null) {
                    console.log('classesRef.mCameraDevice === null');
                    return;
                }
                classesRef.mCaptureSession = cameraCaptureSession;
                //classesRef.mPreviewRequestBuilder.set(android.hardware.camera2.CaptureRequest.CONTROL_AF_MODE, android.hardware.camera2.CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_PICTURE);
                // // Flash is automatically enabled when necessary.
                //classesRef.setAutoFlash(classesRef.mPreviewRequestBuilder);
                // Finally, we start displaying the camera preview.
                classesRef.mPreviewRequest = classesRef.mPreviewRequestBuilder.build();
                classesRef.mCaptureSession.setRepeatingRequest(classesRef.mPreviewRequest, new _this.MyCaptureSessionCaptureCallback, null);
                _this.onSurfaceTextureUpdated;
            },
            onConfigureFailed: function (cameraCaptureSession) {
                console.log("onConfigureFailed " + cameraCaptureSession);
            }
        });
        // from Java : public static abstract class
        _this.MyCaptureSessionCaptureCallback = android.hardware.camera2.CameraCaptureSession.CaptureCallback.extend({
            //console.log('8');
            process: function (result) {
                switch (classesRef.mState) {
                    case classesRef.STATE_PREVIEW: {
                        // We have nothing to do when the camera preview is working normally.
                        break;
                    }
                    case classesRef.STATE_WAITING_LOCK: {
                        var afState = result.get(android.hardware.camera2.CaptureResult.CONTROL_AF_STATE);
                        if (afState === null) {
                            _this.captureStillPicture();
                        }
                        else if (android.hardware.camera2.CaptureResult.CONTROL_AF_STATE_FOCUSED_LOCKED == afState ||
                            android.hardware.camera2.CaptureResult.CONTROL_AF_STATE_NOT_FOCUSED_LOCKED == afState) {
                            // CONTROL_AE_STATE can be null on some devices
                            var aeState = result.get(android.hardware.camera2.CaptureResult.CONTROL_AE_STATE);
                            if (aeState === null ||
                                aeState == android.hardware.camera2.CaptureResult.CONTROL_AE_STATE_CONVERGED) {
                                classesRef.mState = classesRef.STATE_PICTURE_TAKEN;
                                _this.captureStillPicture();
                            }
                            else {
                                _this.runPrecaptureSequence();
                            }
                        }
                        break;
                    }
                    case classesRef.STATE_WAITING_PRECAPTURE: {
                        // CONTROL_AE_STATE can be null on some devices
                        var aeStatee = result.get(android.hardware.camera2.CaptureResult.CONTROL_AE_STATE);
                        if (aeStatee === null ||
                            aeStatee == android.hardware.camera2.CaptureResult.CONTROL_AE_STATE_PRECAPTURE ||
                            aeStatee == android.hardware.camera2.CaptureRequest.CONTROL_AE_STATE_FLASH_REQUIRED) {
                            classesRef.mState = classesRef.STATE_WAITING_NON_PRECAPTURE;
                        }
                        break;
                    }
                    case classesRef.STATE_WAITING_NON_PRECAPTURE: {
                        // CONTROL_AE_STATE can be null on some devices
                        var aeStateee = result.get(android.hardware.camera2.CaptureResult.CONTROL_AE_STATE);
                        if (aeStateee === null || aeStateee != android.hardware.camera2.CaptureResult.CONTROL_AE_STATE_PRECAPTURE) {
                            classesRef.mState = classesRef.STATE_PICTURE_TAKEN;
                            _this.captureStillPicture();
                        }
                        break;
                    }
                }
            },
            onCaptureProgressed: function (session, request, partialResult) {
                // console.log("onCaptureProgressed");
                this.process(partialResult);
            },
            onCaptureCompleted: function (session, request, result) {
                // console.log("onCaptureCompleted"); // repeats!!!!!
                this.process(result);
            },
            onCaptureFailed: function (session, request, failure) {
                // console.log("onCaptureFailed");
                console.log('failure', failure);
                //classesRef.mCameraDevice.close();
                classesRef.mCameraDevice = null;
                classesRef.mCameraOpenCloseLock.release();
                return;
            }
        });
        // (example for: java static interface to javaScript )
        // from Java : public static interface    
        _this.mOnImageAvailableListener = new android.media.ImageReader.OnImageAvailableListener({
            onImageAvailable: function (reader) {
                console.log('9');
                // here we should save our image to file when image is available
                console.log("onImageAvailable");
                console.log('reader', reader);
            }
        });
        _this.mSurfaceTextureListener = new android.view.TextureView.SurfaceTextureListener({
            onSurfaceTextureAvailable: function (texture, width, height) {
                console.log('10');
                classesRef.mSurfaceTexture = texture;
                console.log('classesRef.mSurfaceTexture -----mSurfaceTextureListener--', classesRef.mSurfaceTexture);
                _this.createCameraPreviewSession();
                //this.onSurfaceTextureAvailable
            },
            onSurfaceTextureSizeChanged: function (texture, width, height) {
                console.log('11');
                //this.onSurfaceTextureSizeChanged
            },
            onSurfaceTextureDestroyed: function (texture) {
                console.log('12');
                return true;
                //this.onSurfaceTextureDestroyed
            },
            onSurfaceTextureUpdated: function (texture) {
                //console.log('13', texture); // should be repeating constantly
                //this.onSurfaceTextureUpdated
                // console.log("onSurfaceTexturUpdated");
            },
        });
        // from Java : public static interface    
        //public mSurfaceTextureListener = () => new android.view.TextureView.SurfaceTextureListener({
        //    onSurfaceTextureAvailable: (texture, width, height) => {
        //        console.log('onSurfaceTextureAvailable');
        //        classesRef.mSurfaceTexture = texture;
        //        console.log('classesRef.mSurfaceTexture-------------', classesRef.mSurfaceTexture);
        //        this.createCameraPreviewSession(); 
        //        // openCamera(width, height);
        //    },
        //    onSurfaceTextureSizeChanged: (texture, width, height) => {
        //        console.log('onSurfaceTextureSizeChanged');
        //        // configureTransform(width, height);
        //    },
        //    onSurfaceTextureDestroyed: (texture) => {
        //        // console.log("onSurfaceTextureDestroyed");
        //        return true;
        //    },
        //    onSurfaceTextureUpdated: (texture) => {
        //        // console.log("onSurfaceTexturUpdated");
        //    },
        //});
        // from Java : public static abstract class
        _this.MyStateCallback = android.hardware.camera2.CameraDevice.StateCallback.extend({
            onOpened: function (cameraDevice) {
                console.log("onOpened " + cameraDevice);
                console.log('11');
                classesRef.mCameraOpenCloseLock.release();
                classesRef.mCameraDevice = cameraDevice;
                _this.createCameraPreviewSession();
            },
            onDisconnected: function (cameraDevice) {
                console.log("onDisconnected");
                classesRef.mCameraOpenCloseLock.release();
                cameraDevice.close();
                classesRef.mCameraDevice = null;
            },
            onError: function (cameraDevice, error) {
                console.log("onError");
                console.log("onError: device = " + cameraDevice);
                console.log("onError: error =  " + error);
                classesRef.mCameraOpenCloseLock.release();
                cameraDevice.close();
                classesRef.mCameraDevice = null;
            },
            onClosed: function (cameraDevice) {
                console.log("onClosed");
            }
        });
        _this.height = platformModule.screen.mainScreen.heightPixels;
        _this.width = platformModule.screen.mainScreen.widthPixels;
        console.log("Screen height from Camera Module: " + platformModule.screen.mainScreen.heightPixels);
        //if (classesRef.app.android) {
        //    var mCameraId;
        //    var mCaptureSession;
        //    var mCameraDevice;
        //    var mStateCallBack;
        //    var mBackgroundHandler = null;
        //    var mCameraOpenCloseLock = new java.util.concurrent.Semaphore(1);
        //    var mTextureView;
        //    var mSurfaceTexture;
        //    var mPreviewRequestBuilder;
        //    var mPreviewRequest;
        //    var mImageReader;
        //    var mCaptureCallback;
        //    var mFile;
        //}                
        application.on(application.suspendEvent, function (args) {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
                if (classesRef.mCameraDevice !== null) {
                    classesRef.mCameraDevice.close();
                    classesRef.mCameraDevice = null;
                }
                classesRef.mCameraOpenCloseLock.release();
            }
            else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });
        application.on(application.resumeEvent, function (args) {
            if (args.android) {
                console.log('on resume');
                //this.drawerComponent.navTo('home');
                _this.routerExtensions.back();
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
            }
            else if (args.ios) {
                console.log('on resume');
                //this.drawerComponent.navTo('home');
                _this.routerExtensions.back();
                // For iOS applications, args.ios is UIApplication.
                console.log("UIApplication: " + args.ios);
            }
        });
        return _this;
    }
    Camera.prototype.goBack = function () {
        classesRef.mCameraDevice.close();
        if (classesRef.mCameraDevice == null) {
            classesRef.mCameraDevice = null;
        }
        classesRef.mCameraOpenCloseLock.release();
    };
    Camera.prototype.onSurfaceTextureAvailable = function (texture, width, height) {
        console.log('onSurfaceTextureAvailable from public');
        classesRef.mSurfaceTexture = texture;
        console.log('classesRef.mSurfaceTexture-------------NOOO', classesRef.mSurfaceTexture);
        this.createCameraPreviewSession();
        // openCamera(width, height);
    };
    Camera.prototype.onSurfaceTextureSizeChanged = function (texture, width, height) {
        console.log('onSurfaceTextureSizeChanged');
        // configureTransform(width, height);
    };
    Camera.prototype.ngOnInit = function () {
        this.init = true;
        this.height = platformModule.screen.mainScreen.heightPixels;
        //this.page.height = platformModule.screen.mainScreen.heightPixels;
        console.log('height ----', this.height);
    };
    Camera.prototype.createCameraPreviewSession = function () {
        console.log('5');
        console.log("createCameraPreviewSession");
        //classesRef.mSurfaceTexture = android.graphics.SurfaceTexture;
        if (!classesRef.mSurfaceTexture || !classesRef.mCameraDevice) {
            console.log('classesRef.mSurfaceTexture ----if --', classesRef.mSurfaceTexture);
            console.log('classesRef.mCameraDevice ----if --', classesRef.mCameraDevice);
            console.log(this.mSurfaceTextureListener); // stopping here
            this.mSurfaceTextureListener; // HERE
            console.log('after onSurfaceTexture');
            return;
        }
        console.log('classesRef.mSurfaceTexture ---- after--', classesRef.mSurfaceTexture);
        console.log('classesRef.mCameraDevice ---- after--', classesRef.mCameraDevice);
        var texture = classesRef.mTextureView.getSurfaceTexture();
        // We configure the size of default buffer to be the size of camera preview we want.
        texture.setDefaultBufferSize(800, 480);
        // This is the output Surface we need to start preview.
        var surface = new android.view.Surface(texture);
        // // We set up a CaptureRequest.Builder with the output Surface.
        classesRef.mPreviewRequestBuilder = classesRef.mCameraDevice.createCaptureRequest(android.hardware.camera2.CameraDevice.TEMPLATE_PREVIEW);
        classesRef.mPreviewRequestBuilder.addTarget(surface);
        var surfaceList = new java.util.ArrayList();
        surfaceList.add(surface);
        classesRef.mCameraDevice.createCaptureSession(surfaceList, new this.MyCameraCaptureSessionStateCallback(), null);
        //this.mSurfaceTextureListener;
    };
    return Camera;
}(java.lang.Object));
__decorate([
    core_1.ViewChild(placeholder_1.Placeholder),
    __metadata("design:type", placeholder_1.Placeholder)
], Camera.prototype, "Placeholder", void 0);
Camera = __decorate([
    core_1.Component({
        selector: "Camera",
        templateUrl: "shared/camera/camera.html",
        styleUrls: ["shared/camera/camera-common.css"],
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [page_1.Page, router_extensions_1.RouterExtensions])
], Camera);
exports.Camera = Camera;
var classesRef = (function () {
    function classesRef(page) {
        this.page = page;
    }
    return classesRef;
}());
classesRef.app = require('application');
classesRef.mBackgroundHandler = null;
classesRef.mCameraOpenCloseLock = new java.util.concurrent.Semaphore(1);
classesRef.RESULT_CANCELED = 0;
classesRef.RESULT_OK = -1;
classesRef.REQUEST_VIDEO_CAPTURE = 999;
classesRef.REQUEST_CODE_ASK_PERMISSIONS = 1000;
classesRef.ORIENTATION_UNKNOWN = -1;
classesRef.PERMISSION_DENIED = -1;
classesRef.PERMISSION_GRANTED = 0;
classesRef.MARSHMALLOW = 23;
classesRef.currentapiVersion = android.os.Build.VERSION.SDK_INT;
classesRef.mNextVideoAbsolutePath = fs.knownFolders.documents();
//static that = new WeakRef(this);
classesRef.STATE_PREVIEW = 0;
classesRef.STATE_WAITING_LOCK = 1;
classesRef.STATE_WAITING_PRECAPTURE = 2;
classesRef.STATE_WAITING_NON_PRECAPTURE = 3;
classesRef.STATE_PICTURE_TAKEN = 4;
classesRef.mState = classesRef.STATE_PREVIEW;
exports.classesRef = classesRef;
//export class TNSSurfaceTextureListner extends java.lang.Object implements android.view.TextureView.SurfaceTextureListener {
//    public that = new WeakRef(this);
//    public mSurfaceTextureListener = () => new android.view.TextureView.SurfaceTextureListener({
//        onSurfaceTextureAvailable: (texture, width, height) => {
//            console.log('onSurfaceTextureAvailable');
//            this.that.get().classesRef.mSurfaceTexture = texture;
//            console.log('classesRef.mSurfaceTexture-------------', that.get().classesRef.mSurfaceTexture);
//            this.createCameraPreviewSession();
//            // openCamera(width, height);
//        },
//        onSurfaceTextureSizeChanged: (texture, width, height) => {
//            console.log('onSurfaceTextureSizeChanged');
//            // configureTransform(width, height);
//        },
//        onSurfaceTextureDestroyed: (texture) => {
//            // console.log("onSurfaceTextureDestroyed");
//            return true;
//        },
//        onSurfaceTextureUpdated: (texture) => {
//            // console.log("onSurfaceTexturUpdated");
//        },
//    });
//} 
//# sourceMappingURL=camera.component.js.map